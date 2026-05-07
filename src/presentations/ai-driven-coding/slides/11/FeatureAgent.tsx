import type { ReactNode } from 'react';
import { Appear, Box } from 'spectacle';

import { leroyTheme } from '@/theme/leroy';

type Stage = {
  id?: string;
  title: string;
  detail: string;
  color: string;
};

const preBranch: Stage[] = [
  {
    id: '01',
    title: 'HUMAN INPUT',
    detail: 'Task + acceptance criteria',
    color: '#0d6efd',
  },
  { id: '02', title: 'READ FIGMA', detail: 'Design → code', color: '#3b82f6' },
  { id: '03', title: 'WRITE CODE', detail: '+ unit tests', color: '#6366f1' },
  {
    id: '04',
    title: 'LINT & BUILD',
    detail: 'Format · compile',
    color: '#8b5cf6',
  },
];

const successPath: Stage[] = [
  { id: '05', title: 'OPEN PR', detail: 'Post to Teams', color: '#a855f7' },
  { id: '06', title: 'MANUAL QA', detail: 'Human review', color: '#d946ef' },
  { id: '07', title: 'MERGE → DEV', detail: 'Auto merge', color: '#22c55e' },
  {
    id: '08',
    title: 'PUBLISH DEV',
    detail: 'Live environment',
    color: '#16a34a',
  },
];

const failurePath: Stage[] = [
  { title: 'ALERT TEAMS', detail: 'Context sent', color: '#dc2626' },
  { title: 'PROPOSE FIX', detail: 'Agent retries', color: '#ef4444' },
  {
    title: 'RE-ENTER LOOP',
    detail: 'Back to WRITE CODE',
    color: '#f97316',
  },
];

const StageCard = ({ stage }: { stage: Stage }) => (
  <div
    style={{
      flex: 1,
      minWidth: 0,
      position: 'relative',
      background: leroyTheme.white,
      border: `1px solid ${leroyTheme.grey20}`,
      borderTop: `3px solid ${stage.color}`,
      borderRadius: 10,
      padding: '0.95rem 0.85rem 0.8rem',
      boxShadow: '0 2px 6px rgba(15,23,42,0.06)',
    }}
  >
    {stage.id && (
      <div
        style={{
          position: 'absolute',
          top: -11,
          left: -10,
          width: 26,
          height: 26,
          borderRadius: 7,
          background: stage.color,
          color: leroyTheme.white,
          fontSize: '0.7rem',
          fontWeight: 800,
          letterSpacing: '0.02em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(15,23,42,0.18)',
        }}
      >
        {stage.id}
      </div>
    )}
    <div
      style={{
        fontSize: '0.78rem',
        fontWeight: 800,
        color: stage.color,
        letterSpacing: '0.04em',
        textAlign: 'center',
      }}
    >
      {stage.title}
    </div>
    <div
      style={{
        fontSize: '0.66rem',
        color: leroyTheme.grey60,
        textAlign: 'center',
        marginTop: '0.25rem',
        lineHeight: 1.35,
      }}
    >
      {stage.detail}
    </div>
  </div>
);

const BuildGate = () => (
  <div
    style={{
      flex: '0 0 130px',
      minHeight: 78,
      background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
      color: leroyTheme.white,
      borderRadius: 12,
      border: '2px solid #d97706',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      boxShadow: '0 4px 12px rgba(217,119,6,0.28)',
      textAlign: 'center',
    }}
  >
    <div
      style={{
        fontSize: '1.15rem',
        fontWeight: 900,
        lineHeight: 1,
        marginBottom: 3,
      }}
    >
      ◇
    </div>
    <div
      style={{
        fontSize: '0.72rem',
        fontWeight: 800,
        letterSpacing: '0.05em',
      }}
    >
      BUILD GATE
    </div>
    <div style={{ fontSize: '0.6rem', opacity: 0.95, marginTop: 1 }}>
      pass / fail
    </div>
  </div>
);

const Connector = ({ color }: { color: string }) => (
  <div
    style={{
      flex: '0 0 30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width='26' height='16' viewBox='0 0 26 16' fill='none'>
      <path
        d='M2 8 H19'
        stroke={color}
        strokeWidth='1.8'
        strokeLinecap='round'
        opacity='0.55'
      />
      <path
        d='M16 3 L22 8 L16 13'
        stroke={color}
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        opacity='0.9'
      />
    </svg>
  </div>
);

const BranchSplit = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '0.4rem 0 0.7rem',
    }}
  >
    <svg
      width='240'
      height='42'
      viewBox='0 0 240 42'
      fill='none'
      style={{ display: 'block' }}
    >
      <path
        d='M120 0 V14'
        stroke='#94a3b8'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
      <path
        d='M120 14 Q120 22 60 22 H30'
        stroke='#16a34a'
        strokeWidth='1.8'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M33 18 L27 22 L33 26'
        stroke='#16a34a'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
      <path
        d='M120 14 Q120 22 180 22 H210'
        stroke='#dc2626'
        strokeWidth='1.8'
        fill='none'
        strokeLinecap='round'
      />
      <path
        d='M207 18 L213 22 L207 26'
        stroke='#dc2626'
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
      <text
        x='52'
        y='40'
        fontSize='10'
        fontWeight='800'
        fill='#16a34a'
        textAnchor='middle'
      >
        pass
      </text>
      <text
        x='190'
        y='40'
        fontSize='10'
        fontWeight='800'
        fill='#dc2626'
        textAnchor='middle'
      >
        fail
      </text>
    </svg>
  </div>
);

const Lane = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: ReactNode;
}) => (
  <div
    style={{
      position: 'relative',
      background: `${color}0d`,
      border: `1px solid ${color}55`,
      borderRadius: 12,
      padding: '1.1rem 1rem 0.9rem',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -11,
        left: 18,
        background: color,
        color: leroyTheme.white,
        fontSize: '0.66rem',
        fontWeight: 800,
        letterSpacing: '0.08em',
        padding: '3px 12px',
        borderRadius: 6,
        boxShadow: '0 2px 4px rgba(15,23,42,0.15)',
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

const FeatureAgent = () => {
  return (
    <Box padding='0.5rem 1.5rem'>
      <Appear priority={1}>
        <div
          style={{
            textAlign: 'center',
            color: leroyTheme.grey60,
            fontSize: '0.85rem',
            fontStyle: 'italic',
            marginBottom: '1.4rem',
          }}
        >
          Claude agent + Azure DevOps: from a task ID to a deployed feature.
        </div>
      </Appear>

      {/* Pre-branch pipeline ending at the BUILD GATE */}
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          marginBottom: '0.4rem',
          padding: '0 0.5rem',
        }}
      >
        {preBranch.map((s, idx) => (
          <Appear key={s.id} priority={idx + 2}>
            <div
              style={{
                display: 'flex',
                alignItems: 'stretch',
                flex: 1,
                minWidth: 0,
              }}
            >
              {idx > 0 && <Connector color={s.color} />}
              <StageCard stage={s} />
            </div>
          </Appear>
        ))}
        <Appear priority={6}>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            <Connector color='#f59e0b' />
            <BuildGate />
          </div>
        </Appear>
      </div>

      <Appear priority={6}>
        <BranchSplit />
      </Appear>

      {/* Success lane */}
      <Appear priority={7}>
        <div style={{ marginBottom: '1rem' }}>
          <Lane title='✓ ON SUCCESS' color='#16a34a'>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              {successPath.map((s, idx) => (
                <Appear key={s.id} priority={idx + 8}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'stretch',
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {idx > 0 && <Connector color={s.color} />}
                    <StageCard stage={s} />
                  </div>
                </Appear>
              ))}
            </div>
          </Lane>
        </div>
      </Appear>

      {/* Failure lane */}
      <Appear priority={12}>
        <div style={{ marginBottom: '1rem' }}>
          <Lane title='✗ ON FAILURE' color='#dc2626'>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              {failurePath.map((s, idx) => (
                <Appear key={s.title} priority={idx + 13}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'stretch',
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {idx > 0 && <Connector color={s.color} />}
                    <StageCard stage={s} />
                  </div>
                </Appear>
              ))}
              <div
                style={{
                  flex: '0 0 38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: '#dc2626',
                  paddingLeft: 6,
                }}
                title='Loops back to WRITE CODE'
              >
                ↻
              </div>
            </div>
          </Lane>
        </div>
      </Appear>

      <Appear priority={16}>
        <div
          style={{
            padding: '0.85rem 1rem',
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 8,
            textAlign: 'center',
            fontSize: '0.95rem',
            fontWeight: 600,
          }}
        >
          We changed what engineers spend their time on. Great specs and
          acceptance criteria are now the creative work — the agent handles
          the rest.
        </div>
      </Appear>
    </Box>
  );
};

export default FeatureAgent;
