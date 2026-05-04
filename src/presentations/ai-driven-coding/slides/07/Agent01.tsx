import { Box } from 'spectacle';

const AGENT_GIF =
  'https://substackcdn.com/image/fetch/$s_!RUXi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2a933717-1d59-46a6-ba51-76e24ae048fc_1280x1502.gif';

const Agent01 = () => {
  return (
    <Box>
      <div>
        <div
          style={{
            width: '100%',
            maxWidth: 940,
            height: 570,
            padding: '0.65rem',
            overflow: 'hidden',
          }}
        >
          <img
            src={AGENT_GIF}
            alt='Animated demo of the Agent 01 dependency guardian workflow'
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 12,
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default Agent01;
