import type { CSSProperties } from 'react';
import { Box, useSteps } from 'spectacle';

import { leroyTheme } from '@/theme/leroy';

const ACCENT = leroyTheme.linkBlue;

type PipelineStep = {
  id: string;
  index: string;
  label: string;
  note: string;
  col: number;
  row: number;
};

const PIPELINE: PipelineStep[] = [
  {
    id: 'M',
    index: '01',
    label: 'MONITOR',
    note: 'Deps + CVEs',
    col: 1,
    row: 1,
  },
  {
    id: 'D',
    index: '02',
    label: 'DETECT',
    note: 'Critical updates',
    col: 3,
    row: 1,
  },
  {
    id: 'U',
    index: '03',
    label: 'UPDATE',
    note: 'Bump + format + lint',
    col: 5,
    row: 1,
  },
  {
    id: 'B',
    index: '04',
    label: 'BUILD & TEST',
    note: 'CI passes',
    col: 5,
    row: 3,
  },
  {
    id: 'P',
    index: '05',
    label: 'OPEN PR',
    note: 'Tag reviewer',
    col: 3,
    row: 3,
  },
  {
    id: 'N',
    index: '06',
    label: 'NOTIFY TEAMS',
    note: 'Request approval',
    col: 1,
    row: 3,
  },
];

type BranchStep = {
  index: string;
  label: string;
  note: string;
};

const APPROVED_PATH: BranchStep[] = [
  { index: '07', label: 'MERGE & BUILD', note: 'Verify status' },
  { index: '08', label: 'E2E TESTS', note: 'Full suite' },
  { index: '09', label: 'PASSED', note: 'Safe to ship' },
];

const REJECTED_PATH: BranchStep[] = [
  { index: '07', label: 'ALERT TEAMS', note: 'Fast feedback' },
  { index: '08', label: 'SUGGEST FIX', note: 'Agent-proposed diff' },
  { index: '09', label: 'UPDATE PR', note: 'Loop back to approval' },
];

const TOTAL_REVEALS = PIPELINE.length + 3;

type Status = 'past' | 'current' | 'future';

const cardShellStyle = (isCurrent: boolean): CSSProperties => ({
  position: 'relative',
  background: leroyTheme.white,
  border: isCurrent ? `2px solid ${ACCENT}` : `1px solid ${leroyTheme.grey20}`,
  borderRadius: 10,
  padding: '0.55rem 0.75rem 0.6rem',
  boxShadow: isCurrent
    ? '0 12px 22px -14px rgba(13, 49, 113, 0.32)'
    : '0 1px 0 rgba(15, 23, 42, 0.02), 0 4px 10px -8px rgba(15, 23, 42, 0.16)',
  transition: 'all 200ms ease',
});

const accentBarStyle = (isCurrent: boolean): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: 28,
  height: 3,
  background: isCurrent ? ACCENT : leroyTheme.grey20,
});

const indexPillStyle: CSSProperties = {
  fontFamily: "'SF Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: '0.6rem',
  fontWeight: 700,
  color: leroyTheme.grey40,
  letterSpacing: '0.12em',
};

const PipelineCard = ({
  step,
  status,
}: {
  step: PipelineStep;
  status: Status;
}) => {
  if (status === 'future') return null;
  const isCurrent = status === 'current';

  return (
    <article
      style={{
        ...cardShellStyle(isCurrent),
        gridColumn: step.col,
        gridRow: step.row,
      }}
    >
      <span style={accentBarStyle(isCurrent)} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.25rem',
        }}
      >
        <span style={indexPillStyle}>{step.index}</span>
        {status === 'past' && (
          <span
            aria-label='completed'
            style={{ color: '#16a34a', fontSize: '0.8rem', lineHeight: 1 }}
          >
            ✓
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: '0.85rem',
          fontWeight: 800,
          letterSpacing: '0.02em',
          color: isCurrent ? ACCENT : leroyTheme.grey80,
          lineHeight: 1.15,
        }}
      >
        {step.label}
      </div>
      <div
        style={{
          fontSize: '0.7rem',
          color: leroyTheme.grey60,
          marginTop: '0.15rem',
          lineHeight: 1.3,
        }}
      >
        {step.note}
      </div>
    </article>
  );
};

const Connector = ({
  col,
  row,
  visible,
  symbol,
}: {
  col: number;
  row: number;
  visible: boolean;
  symbol: '→' | '←' | '↓';
}) => (
  <div
    style={{
      gridColumn: col,
      gridRow: row,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: visible ? ACCENT : 'transparent',
      fontSize: '1.2rem',
      fontWeight: 700,
      transition: 'color 220ms ease',
    }}
  >
    {symbol}
  </div>
);

const BranchSummary = ({
  pathLabel,
  pathIcon,
  steps,
  reveal,
  active,
}: {
  pathLabel: string;
  pathIcon: '✓' | '✗';
  steps: BranchStep[];
  reveal: boolean;
  active: boolean;
}) => (
  <article
    style={{
      ...cardShellStyle(active),
      padding: '0.7rem 0.9rem 0.75rem',
      opacity: reveal ? 1 : 0,
      transition: 'opacity 220ms ease, all 200ms ease',
    }}
  >
    <span style={accentBarStyle(active)} />

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        fontSize: '0.7rem',
        fontWeight: 800,
        letterSpacing: '0.16em',
        color: ACCENT,
        marginBottom: '0.5rem',
      }}
    >
      <span>{pathIcon}</span>
      <span>{pathLabel}</span>
    </div>

    <ol
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'grid',
        gap: '0.3rem',
      }}
    >
      {steps.map((s, idx) => (
        <li
          key={s.index}
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto auto 1fr',
            alignItems: 'baseline',
            gap: '0.55rem',
          }}
        >
          <span style={indexPillStyle}>{s.index}</span>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: leroyTheme.grey80,
              letterSpacing: '0.02em',
            }}
          >
            {s.label}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: leroyTheme.grey60,
              lineHeight: 1.3,
            }}
          >
            {s.note}
          </span>
          {idx < steps.length - 1 && (
            <span
              aria-hidden
              style={{
                gridColumn: '1 / -1',
                height: 1,
                background: leroyTheme.grey10,
                marginTop: '0.25rem',
              }}
            />
          )}
        </li>
      ))}
    </ol>
  </article>
);

const CaseStudyIntro = () => {
  const { step, placeholder } = useSteps(TOTAL_REVEALS);
  const visibleCount = Math.min(step + 1, TOTAL_REVEALS);

  const pipelineStatusOf = (idx: number): Status => {
    if (idx >= visibleCount) return 'future';
    if (idx === visibleCount - 1) return 'current';
    return 'past';
  };

  const showApprovalHeader = visibleCount >= PIPELINE.length + 1;
  const showApprovedPath = visibleCount >= PIPELINE.length + 2;
  const showRejectedPath = visibleCount >= PIPELINE.length + 3;
  const approvedActive = visibleCount === PIPELINE.length + 2;
  const rejectedActive = visibleCount === PIPELINE.length + 3;

  return (
    <Box padding='0.25rem 1.5rem'>
      {placeholder}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 32px 1fr 32px 1fr',
          gridTemplateRows: 'auto 28px auto',
          columnGap: '0.35rem',
          rowGap: '0.25rem',
          alignItems: 'center',
        }}
      >
        {PIPELINE.map((s, idx) => (
          <PipelineCard key={s.id} step={s} status={pipelineStatusOf(idx)} />
        ))}

        <Connector col={2} row={1} visible={visibleCount >= 2} symbol='→' />
        <Connector col={4} row={1} visible={visibleCount >= 3} symbol='→' />
        <Connector col={5} row={2} visible={visibleCount >= 4} symbol='↓' />
        <Connector col={4} row={3} visible={visibleCount >= 5} symbol='←' />
        <Connector col={2} row={3} visible={visibleCount >= 6} symbol='←' />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          margin: '0.7rem 0 0.55rem',
          opacity: showApprovalHeader ? 1 : 0,
          transition: 'opacity 220ms ease',
        }}
      >
        <span style={{ color: ACCENT, fontSize: '1.1rem', fontWeight: 700 }}>
          ↓
        </span>
        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            color: ACCENT,
          }}
        >
          AGENT 01 · APPROVAL FLOW
        </span>
        <span style={{ color: ACCENT, fontSize: '1.1rem', fontWeight: 700 }}>
          ↓
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: '0.9rem',
          alignItems: 'stretch',
        }}
      >
        <BranchSummary
          pathLabel='ON APPROVAL'
          pathIcon='✓'
          steps={APPROVED_PATH}
          reveal={showApprovedPath}
          active={approvedActive}
        />
        <BranchSummary
          pathLabel='NOT APPROVED'
          pathIcon='✗'
          steps={REJECTED_PATH}
          reveal={showRejectedPath}
          active={rejectedActive}
        />
      </div>
    </Box>
  );
};

export default CaseStudyIntro;
