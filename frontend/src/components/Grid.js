import { chunk } from "lodash";
import React from "react";
import styled from "styled-components";

const Grid = ({ cols, children, style = {} }) => {
  const rows = chunk(React.Children.toArray(children), cols);
  return (
    <GridWrapper style={{ ...style }}>
      {rows.map(cols => (
        <Row>
          {cols.map(col => (
            <Column>{col}</Column>
          ))}
        </Row>
      ))}
    </GridWrapper>
  );
};

export default Grid;

const GridWrapper = styled.div`
  box-sizing: border-box;
`;
const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 16px;
`;
const Column = styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;
`;
