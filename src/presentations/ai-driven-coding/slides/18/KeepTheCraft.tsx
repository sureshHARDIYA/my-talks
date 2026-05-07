import { Appear, Box } from 'spectacle';

import { leroyTheme } from '@/theme/leroy';

const habits = [
  {
    id: '01',
    title: 'Stay close to the code',
    body: 'Read every diff. Debug your own work regularly. Your mental model is what makes the agent useful — and what makes you valuable to the team.',
    note: 'Field signal: engineers report a measurable drop in debugging fluency when they stop practicing it (Anthropic).',
    color: '#0d6efd',
  },
  {
    id: '02',
    title: "Keep the architect's seat",
    body: 'You set direction, the agent helps execute. Even seasoned engineers can drift from the system picture when they hand over too much at once.',
    note: 'Simon Willison, 30 years writing software, flagged this exact pattern in his own workflow.',
    color: '#6366f1',
  },
  {
    id: '03',
    title: 'Protect the apprenticeship',
    body: 'Juniors grow through hands-on implementation, not only by reviewing output. Save some tasks for the human path so the next generation actually forms.',
    note: 'Reviewing AI-generated code is, at best, half of how a senior is built.',
    color: '#a855f7',
  },
  {
    id: '04',
    title: 'Verify before you trust',
    body: 'Tests, types and human review remain the contract. Treat agent output like a thoughtful draft from a fast collaborator — confirm, then ship.',
    note: 'Outputs are probabilistic by design; even strong prompts occasionally hallucinate.',
    color: '#22c55e',
  },
];

const KeepTheCraft = () => {
  return (
    <Box padding='0.5rem 1.5rem'>
      <Appear priority={1}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: leroyTheme.grey60,
            marginBottom: '0.55rem',
          }}
        >
          AI AS A PARTNER — NOT A REPLACEMENT
        </div>
      </Appear>

      <Appear priority={2}>
        <div
          style={{
            textAlign: 'center',
            fontSize: '1.35rem',
            fontWeight: 800,
            color: leroyTheme.textBlue,
            lineHeight: 1.3,
            marginBottom: '0.3rem',
          }}
        >
          AI <span style={{ color: leroyTheme.linkBlue }}>boosts</span>{' '}
          development —
          <br />
          it works best when it{' '}
          <span style={{ color: leroyTheme.linkBlue }}>
            doesn’t try to take over.
          </span>
        </div>
      </Appear>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.7rem',
          marginBottom: '1rem',
        }}
      >
        {habits.map((h, idx) => (
          <Appear key={h.id} priority={idx + 3}>
            <div
              style={{
                position: 'relative',
                padding: '0.9rem 0.95rem 0.85rem 1.15rem',
                background: leroyTheme.white,
                border: `1px solid ${leroyTheme.grey20}`,
                borderLeft: `4px solid ${h.color}`,
                borderRadius: 8,
                boxShadow: '0 1px 3px rgba(15,23,42,0.05)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.55rem',
                  marginBottom: '0.3rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: h.color,
                    letterSpacing: '0.04em',
                    background: `${h.color}14`,
                    padding: '2px 7px',
                    borderRadius: 5,
                  }}
                >
                  {h.id}
                </span>
                <span
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 800,
                    color: h.color,
                  }}
                >
                  {h.title}
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: leroyTheme.grey80,
                  lineHeight: 1.5,
                  marginBottom: '0.35rem',
                }}
              >
                {h.body}
              </div>
              <div
                style={{
                  fontSize: '0.72rem',
                  color: leroyTheme.grey60,
                  lineHeight: 1.45,
                  fontStyle: 'italic',
                }}
              >
                {h.note}
              </div>
            </div>
          </Appear>
        ))}
      </div>

      <Appear priority={8}>
        <div
          style={{
            padding: '0.95rem 1.2rem',
            background: leroyTheme.linkBlue,
            color: leroyTheme.white,
            borderRadius: 12,
            textAlign: 'center',
            fontSize: '0.98rem',
            fontWeight: 600,
            lineHeight: 1.55,
            maxWidth: 940,
            margin: '0 auto',
          }}
        >
          AI is a force multiplier when the engineer stays in the driver’s
          seat.
        </div>
      </Appear>
    </Box>
  );
};

export default KeepTheCraft;
