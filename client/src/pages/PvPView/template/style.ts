import styled from 'styled-components';

export const Template = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #212121;
`;

export const PlaygroundWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SandboxWrapper = styled.section`
  margin: 20px 50px;
`;

export const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin-bottom: 40px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;

  button {
    width: 150px;
    padding: 10px;
    font-size: 0.9rem;
  }

  button:first-child {
    margin-right: 50px;
  }
`;
