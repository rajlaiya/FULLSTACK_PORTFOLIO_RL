import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-content">
        <div className="brand-text">CODING WITH RL</div>
        <div className="spinner">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);

  .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .brand-text {
    font-family: 'Fira Code', 'JetBrains Mono', monospace;
    font-size: clamp(1.8rem, 6vw, 3.5rem);
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    position: relative;
  }

  .brand-text::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, transparent);
    border-radius: 2px;
  }

  .spinner {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
    animation: bounce 1.4s ease-in-out infinite;
  }

  .dot1 {
    animation-delay: 0s;
    background: #3b82f6;
  }

  .dot2 {
    animation-delay: 0.2s;
    background: #8b5cf6;
  }

  .dot3 {
    animation-delay: 0.4s;
    background: #06b6d4;
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0.6);
      opacity: 0.5;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    .brand-text {
      letter-spacing: 0.1em;
    }
    
    .dot {
      width: 10px;
      height: 10px;
    }
    
    .spinner {
      gap: 10px;
    }
  }
`;

export default Loader;
