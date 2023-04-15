import styled from 'styled-components';

const randomBgColor = () => {
  const color = () => Math.floor(Math.random() * 256);
  return `rgb(${color()}, ${color()}, ${color()})`;
};

export const StatisticsSection = styled.section`
  margin: 0 auto;
  margin-bottom: 20px;

  width: 340px;

  padding: 20px 10px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);

  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;

  text-align: center;
`;

export const StatList = styled.ul`
  list-style: none;

  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 10px 0;

  color: ${p => p.theme.colors.white};

  text-align: center;

  background-color: ${randomBgColor};

  border-radius: 4px;

  width: calc(100% / 4 - 10px);
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Percentage = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
