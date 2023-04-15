import styled from 'styled-components';

export const FreindsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;

  max-width: 360px;

  margin: 0 auto;
  margin-bottom: 20px;

  padding: 20px;
`;

export const FreindItem = styled.li`
  display: flex;
  align-items: center;
  gap: 50px;

  padding: 20px 40px;

  border: 1px solid #e4e9f0;

  border-radius: 5px;

  text-align: center;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
`;

export const Status = styled.span`
  display: block;

  width: 14px;
  height: 14px;

  border-radius: 50%;

  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  display: block;

  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 16px;

  font-weight: 600;
`;
