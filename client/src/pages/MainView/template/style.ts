import styled from 'styled-components';

export const Template = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #212121;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 10vh;
  width: 400px;
  height: fit-content;
`;

export const RankingWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  right: 10%;
  display: flex;
  justify-content: space-between;
`;
