import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="atom" aria-label="Loading">
        <div className="electron e1" />
        <div className="electron e2" />
        <div className="electron e3" />
        <div className="nucleus" />
      </div>
      <div className="caption">Coding with rl</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  --size: 220px; /* larger */
  --color: #31a4cc;
  --text: #e5e7eb;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  min-height: 100vh;
  width: 100vw;
  background: transparent;

  .atom {
    position: relative;
    width: var(--size);
    height: var(--size);
  }

  /* orbits */
  .electron {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid transparent;
    border-left-color: color-mix(in oklab, var(--color) 60%, transparent);
    border-top-color: color-mix(in oklab, var(--color) 35%, transparent);
    filter: drop-shadow(0 0 10px color-mix(in oklab, var(--color) 50%, transparent));
    animation: spin 1.8s linear infinite;
  }

  .electron::before {
    content: '';
    position: absolute;
    top: -7px; /* at top of the orbit */
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background: var(--color);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--color), 0 0 20px var(--color);
  }

  .e1 { transform: rotate(0deg); }
  .e2 { transform: rotate(60deg); animation-duration: 2.2s; }
  .e3 { transform: rotate(120deg); animation-duration: 1.6s; }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* nucleus */
  .nucleus {
    position: absolute;
    top: 50%; left: 50%;
    width: 28px; height: 28px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle at 30% 30%, #ffffff, var(--color));
    box-shadow: 0 0 18px var(--color), inset 0 0 6px rgba(255,255,255,.6);
  }

  .caption {
    font-family: 'Fira Code', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-weight: 800; /* extrabold */
    letter-spacing: 0.02em;
    background: linear-gradient(90deg, #34d399 0%, #3b82f6 50%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-shadow: 0 2px 10px rgba(99,102,241,.25);
    animation: pulseGlow 1.8s ease-in-out infinite;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
  }

  @keyframes pulseGlow {
    0%, 100% {
      text-shadow: 0 2px 10px rgba(99,102,241,.25);
    }
    50% {
      text-shadow: 0 4px 18px rgba(59,130,246,.45);
    }
  }

  @media (max-width: 600px) {
    --size: 160px;
  }
`;

export default Loader;
