import { Appear, Box } from 'spectacle';

import { leroyTheme } from '@/theme/leroy';

const stillDo = [
  'Write clear specs & acceptance criteria',
  'Review judgment calls',
  'Approve architectural changes',
  "Define what 'good' means",
];

const noLongerDo = [
  'Write boilerplate',
  'Chase dependency updates',
  'Manually wire up pipelines',
  'Translate designs into scaffolding',
];

const buckets = [
  {
    icon: '📝',
    title: 'Great specs',
    items: ['Acceptance criteria', 'Edge cases', 'Test plans'],
    color: '#0d6efd',
  },
  {
    icon: '🧩',
    title: 'Agent skills & plugins',
    items: ['Skill packs', 'Hooks', 'Sub-agents'],
    color: '#6366f1',
  },
  {
    icon: '📐',
    title: 'Codified rules',
    items: ['Lint · build', 'Format · test', 'Style policies'],
    color: '#a855f7',
  },
  {
    icon: '💼',
    title: 'Business rules',
    items: ['Domain logic', 'Guardrails', 'Compliance'],
    color: '#16a34a',
  },
];

const TheInsight = () => {
  return (
    <Box padding='0.5rem 1.5rem'>
      <div
        style={{
          textAlign: 'center',
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.18em',
          color: leroyTheme.grey60,
          marginBottom: '0.35rem',
        }}
      >
        THE INSIGHT
      </div>

      <Appear priority={0}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: leroyTheme.textBlue,
            marginBottom: '0.2rem',
          }}
        >
          The job didn't disappear.
        </div>
      </Appear>

      <Appear priority={3}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: 800,
            color: leroyTheme.linkBlue,
            marginBottom: '0.85rem',
          }}
        >
          It moved up the stack.
        </div>
      </Appear>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '0.85rem',
          marginBottom: '0.95rem',
        }}
      >
        <Appear priority={4}>
          <div
            style={{
              padding: '0.85rem 1rem',
              background: '#f0fdf4',
              border: '2px solid #22c55e',
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#16a34a',
                letterSpacing: '0.06em',
                marginBottom: '0.45rem',
              }}
            >
              ✓ WHAT HUMANS STILL DO
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.1rem',
                color: leroyTheme.grey80,
                fontSize: '0.88rem',
                lineHeight: 1.5,
              }}
            >
              {stillDo.map((s) => (
                <li key={s} style={{ marginBottom: 2 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Appear>

        <Appear priority={5}>
          <div
            style={{
              padding: '0.85rem 1rem',
              background: '#fef2f2',
              border: '2px solid #dc2626',
              borderRadius: 10,
            }}
          >
            <div
              style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#dc2626',
                letterSpacing: '0.06em',
                marginBottom: '0.45rem',
              }}
            >
              ✗ WHAT THEY NO LONGER DO
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.1rem',
                color: leroyTheme.grey80,
                fontSize: '0.88rem',
                lineHeight: 1.5,
              }}
            >
              {noLongerDo.map((s) => (
                <li key={s} style={{ marginBottom: 2 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Appear>
      </div>

      {/* In-practice strip — codified in lsg-coding-standards */}
      <Appear priority={6}>
        <div
          style={{
            position: 'relative',
            padding: '1.05rem 1.1rem 0.85rem',
            background: leroyTheme.grey0,
            border: `1px solid ${leroyTheme.grey20}`,
            borderRadius: 12,
            boxShadow: '0 1px 3px rgba(15,23,42,0.04)',
          }}
        >
          {/* Plugin badge */}
          <div
            style={{
              position: 'absolute',
              top: -11,
              left: 18,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '4px 12px',
              background: leroyTheme.linkBlue,
              color: leroyTheme.white,
              borderRadius: 6,
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              boxShadow: '0 2px 5px rgba(15,23,42,0.18)',
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            }}
          >
            <span>✦</span>
            <span>IN PRACTICE — codified in</span>
            <span
              style={{
                background: leroyTheme.white,
                color: leroyTheme.linkBlue,
                padding: '1px 7px',
                borderRadius: 4,
              }}
            >
              lsg-coding-standards
            </span>
            <span style={{ opacity: 0.85 }}>· Claude plugin</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '0.6rem',
              marginTop: '0.65rem',
            }}
          >
            {buckets.map((b) => (
              <div
                key={b.title}
                style={{
                  background: leroyTheme.white,
                  border: `1px solid ${b.color}33`,
                  borderTop: `3px solid ${b.color}`,
                  borderRadius: 8,
                  padding: '0.6rem 0.7rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 7,
                    marginBottom: '0.4rem',
                  }}
                >
                  <span style={{ fontSize: '1rem', lineHeight: 1 }}>
                    {b.icon}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      color: b.color,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {b.title}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 4,
                  }}
                >
                  {b.items.map((it) => (
                    <span
                      key={it}
                      style={{
                        fontSize: '0.66rem',
                        fontWeight: 600,
                        color: b.color,
                        background: `${b.color}10`,
                        border: `1px solid ${b.color}33`,
                        padding: '2px 7px',
                        borderRadius: 999,
                        fontFamily:
                          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                      }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '0.7rem',
              fontSize: '0.72rem',
              color: leroyTheme.grey60,
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            Skills · hooks · sub-agents · linting · build · formatting ·
            business rules — all packaged so the agents can be productive on
            day one.
          </div>
        </div>
      </Appear>
    </Box>
  );
};

export default TheInsight;
