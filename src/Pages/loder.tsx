import styled from 'styled-components';
import serviceLogo from '../assets/service_logo.png';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-content">
        <div className="logo-container">
          <img src={serviceLogo} alt="Coding With RL Logo" className="brand-logo" />
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background: #000000; /* Complete solid black background */

  .loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .brand-logo {
    width: clamp(280px, 60vw, 550px);
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    .brand-logo {
      width: clamp(220px, 75vw, 280px);
    }
  }
`;

export default Loader;

