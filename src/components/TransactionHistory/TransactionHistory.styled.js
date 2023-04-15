import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 75%;

  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background-color: ${p => p.theme.colors.blue};

  color: ${p => {
    return p.theme.colors.white;
  }};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.whiteGrey};
  }
`;

export const TableHeader = styled.th`
  padding: 10px;

  text-align: center;
`;

export const TableData = styled.td`
  padding: 10px;

  text-align: center;

  color: ${p => p.theme.colors.grey};
`;
