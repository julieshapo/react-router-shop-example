import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1px;
  background-color: rgba(220, 227, 229, 0.8);
  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;
  overflow: hidden;
`;

export const CellWrapper = styled.div`
  min-width: 156px;
  min-height: 125px;
  background-color: #fff;
  color: #343434;
`;

export const RowInCell = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DayWrapper = styled.div`
  height: 26px;
  width: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
  padding-right: 14px;
  margin: 2px;
`;

export const CurrentDay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #3e85f3;
  color: #fff;
`;
