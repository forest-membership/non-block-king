import styled, { keyframes } from 'styled-components';

const textFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const RankingList = styled.ul`
  padding: 20px;
`;

export const RankingListItem = styled.li<{ animationDelayCriteria: number }>`
  display: flex;
  margin-bottom: 30px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  animation: ${textFade} 1.5s ease;
  animation-delay: ${(props) => props.animationDelayCriteria * 0.7}s;

  .icon {
    width: 30px;
  }

  .ordinal {
    width: 50px;
  }

  .username {
    width: 150px;
  }
`;
