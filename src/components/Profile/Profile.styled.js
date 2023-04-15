import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 20px;

  width: 360px;

  padding: 30px 0;

  background-color: ${p => {
    return p.theme.colors.white;
  }};

  border-radius: 10px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;

  object-fit: cover;

  border-radius: 50%;
  border: 5px solid #ffffff;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.div`
  font-size: 16px;

  color: ${p => {
    return p.theme.colors.grey;
  }};
`;

export const Location = styled.div`
  font-size: 16px;

  color: ${p => {
    return p.theme.colors.grey;
  }};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;

  width: 300px;

  font-size: 16px;
  font-weight: 700;

  color: ${p => {
    return p.theme.colors.grey;
  }};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  border-right: 1px solid;

  padding: 10px;
`;

export const Label = styled.span`
  text-transform: uppercase;

  color: ${p => {
    return p.theme.colors.grey;
  }};
`;

export const Quantity = styled.span`
  color:   color: ${p => {
    return p.theme.colors.black;
  }};
`;
