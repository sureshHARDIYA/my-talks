import type { CSSProperties, ReactNode } from 'react';
import { Appear, Box } from 'spectacle';

import { leroyTheme } from '@/theme/leroy';

type Stack = {
  label: string;
  accent: string;
  deps: string[];
  devDeps: string[];
};

const stacks: Stack[] = [
  {
    label: 'Frontend',
    accent: '#2563eb',
    deps: ['react', 'react-router', 'axios', 'zustand'],
    devDeps: ['vite', 'eslint', 'vitest', 'typescript'],
  },
  {
    label: 'Backend',
    accent: '#0d9488',
    deps: ['fastapi', 'sqlalchemy', 'pydantic', 'httpx'],
    devDeps: ['pytest', 'ruff', 'mypy', 'typescript'],
  },
];

const Pill = ({
  label,
  shared,
  accent,
}: {
  label: string;
  shared?: boolean;
  accent: string;
}) => (
  <span
    style={{
      display: 'inline-block',
      padding: '3px 9px',
      margin: '3px 4px 3px 0',
      borderRadius: 999,
      fontSize: '0.72rem',
      fontWeight: 600,
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      color: shared ? leroyTheme.white : accent,
      background: shared ? accent : `${accent}14`,
      border: `1px solid ${shared ? accent : `${accent}55`}`,
    }}
  >
    {label}
  </span>
);

const StackCard = ({ stack }: { stack: Stack }) => (
  <div
    style={{
      background: leroyTheme.white,
      border: `1px solid ${leroyTheme.grey20}`,
      borderTop: `4px solid ${stack.accent}`,
      borderRadius: 10,
      padding: '0.7rem 0.85rem',
    }}
  >
    <div
      style={{
        fontSize: '0.95rem',
        fontWeight: 800,
        color: leroyTheme.textBlue,
        marginBottom: '0.55rem',
      }}
    >
      {stack.label}
    </div>

    <div style={{ marginBottom: '0.5rem' }}>
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: leroyTheme.grey60,
          marginBottom: '0.25rem',
        }}
      >
        DEPENDENCIES
      </div>
      <div>
        {stack.deps.map((d) => (
          <Pill key={d} label={d} accent={stack.accent} />
        ))}
      </div>
    </div>

    <div>
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: leroyTheme.grey60,
          marginBottom: '0.25rem',
        }}
      >
        DEV DEPENDENCIES
      </div>
      <div>
        {stack.devDeps.map((d) => (
          <Pill
            key={d}
            label={d}
            accent={stack.accent}
            shared={d === 'typescript'}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ---------- Tree visualization ---------- */

type TreeNode = {
  name: string;
  version?: string;
  flag?: 'cve' | 'major';
  children?: TreeNode[];
};

const tree: TreeNode = {
  name: 'package.json',
  children: [
    {
      name: 'dependencies',
      children: [
        {
          name: 'react',
          version: '^18.3.1',
          children: [
            { name: 'scheduler', version: '0.23.0' },
            { name: 'loose-envify', version: '1.4.0' },
          ],
        },
        {
          name: 'axios',
          version: '^1.6.7',
          children: [
            { name: 'follow-redirects', version: '1.15.6' },
            { name: 'form-data', version: '4.0.0', flag: 'cve' },
          ],
        },
        {
          name: 'zustand',
          version: '^4.5.0',
          children: [{ name: 'use-sync-external-store', version: '1.2.0' }],
        },
      ],
    },
    {
      name: 'devDependencies',
      children: [
        {
          name: 'vite',
          version: '^5.2.0',
          children: [
            { name: 'esbuild', version: '0.20.2' },
            { name: 'rollup', version: '4.13.0', flag: 'major' },
          ],
        },
        { name: 'typescript', version: '^5.4.2' },
        {
          name: 'vitest',
          version: '^1.4.0',
          children: [{ name: '@vitest/expect', version: '1.4.0' }],
        },
      ],
    },
  ],
};

const DEP_COLOR = '#2563eb';
const DEV_COLOR = '#0d9488';

const renderTree = (
  node: TreeNode,
  prefix: string,
  isLast: boolean,
  level: number,
  group: 'deps' | 'devDeps' | undefined,
): ReactNode[] => {
  const out: ReactNode[] = [];
  const connector = level === 0 ? '' : isLast ? '└─ ' : '├─ ';

  const isRoot = level === 0;
  const isGroupHeader = level === 1;
  const groupHere: 'deps' | 'devDeps' | undefined = isGroupHeader
    ? node.name === 'dependencies'
      ? 'deps'
      : 'devDeps'
    : group;

  const accent = groupHere === 'devDeps' ? DEV_COLOR : DEP_COLOR;

  let nameStyle: CSSProperties;
  if (isRoot) {
    nameStyle = { color: leroyTheme.textBlue, fontWeight: 800 };
  } else if (isGroupHeader) {
    nameStyle = { color: accent, fontWeight: 800 };
  } else if (level === 2) {
    nameStyle = { color: accent, fontWeight: 700 };
  } else {
    nameStyle = { color: leroyTheme.grey60, fontWeight: 500 };
  }

  out.push(
    <div key={`${prefix}${node.name}-${level}`} style={{ whiteSpace: 'pre' }}>
      <span style={{ color: leroyTheme.grey40 }}>
        {prefix}
        {connector}
      </span>
      <span style={nameStyle}>{node.name}</span>
      {node.version && (
        <span style={{ color: leroyTheme.grey40, fontWeight: 500 }}>
          {'  '}
          {node.version}
        </span>
      )}
      {node.flag === 'cve' && (
        <span
          style={{
            marginLeft: 8,
            padding: '1px 6px',
            background: '#fee2e2',
            color: '#b91c1c',
            border: '1px solid #fca5a5',
            borderRadius: 4,
            fontSize: '0.65rem',
            fontWeight: 700,
          }}
        >
          CVE
        </span>
      )}
      {node.flag === 'major' && (
        <span
          style={{
            marginLeft: 8,
            padding: '1px 6px',
            background: '#fef3c7',
            color: '#92400e',
            border: '1px solid #fcd34d',
            borderRadius: 4,
            fontSize: '0.65rem',
            fontWeight: 700,
          }}
        >
          MAJOR
        </span>
      )}
    </div>,
  );

  if (node.children) {
    const childPrefix = isRoot ? '' : prefix + (isLast ? '   ' : '│  ');
    node.children.forEach((c, i) => {
      const last = i === node.children!.length - 1;
      out.push(...renderTree(c, childPrefix, last, level + 1, groupHere));
    });
  }
  return out;
};

const DepTree = () => (
  <div
    style={{
      background: leroyTheme.white,
      border: `1px solid ${leroyTheme.grey20}`,
      borderRadius: 10,
      padding: '0.75rem 0.9rem',
      fontFamily:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
      fontSize: '0.78rem',
      lineHeight: 1.55,
      boxShadow: '0 1px 0 rgba(15,23,42,0.04)',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5rem',
        fontFamily: 'inherit',
      }}
    >
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: leroyTheme.grey60,
        }}
      >
        FRONTEND · npm ls --depth=1
      </span>
      <span style={{ display: 'inline-flex', gap: 10, fontSize: '0.65rem' }}>
        <span style={{ color: DEP_COLOR, fontWeight: 700 }}>● deps</span>
        <span style={{ color: DEV_COLOR, fontWeight: 700 }}>● devDeps</span>
        <span style={{ color: leroyTheme.grey60, fontWeight: 700 }}>
          ● transitive
        </span>
      </span>
    </div>
    {renderTree(tree, '', true, 0, undefined)}
  </div>
);

const Agent01 = () => {
  return (
    <Box padding='0.25rem 1.25rem'>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)',
          gap: '1.25rem',
          alignItems: 'start',
        }}
      >
        {/* LEFT — FE/BE illustration */}
        <Appear priority={1}>
          <div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              {stacks.map((s) => (
                <StackCard key={s.label} stack={s} />
              ))}
            </div>

            <div
              style={{
                marginTop: '0.7rem',
                padding: '0.55rem 0.75rem',
                background: leroyTheme.grey10,
                border: `1px dashed ${leroyTheme.grey40}`,
                borderRadius: 8,
                fontSize: '0.78rem',
                color: leroyTheme.grey80,
                textAlign: 'center',
              }}
            >
              Same package can live in <strong>both</strong> stacks and in
              <strong> both</strong> sections — versions drift independently.
            </div>
          </div>
        </Appear>

        {/* RIGHT — recursive dep tree */}
        <Appear priority={2}>
          <div>
            <DepTree />
            <div
              style={{
                marginTop: '0.6rem',
                padding: '0.6rem 0.8rem',
                background: '#e2e7ee',
                border: '2px solid #94a3b8',
                borderRadius: 8,
                fontSize: '0.82rem',
                color: leroyTheme.black,
                fontWeight: 600,
                textAlign: 'center',
              }}
            >
              Agent 01 — the Dependency Guardian — walks this whole tree, every
              day.
            </div>
          </div>
        </Appear>
      </div>
    </Box>
  );
};

export default Agent01;
