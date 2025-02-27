import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';
import { ReactComponent as RefreshIcon } from 'images/repeat.svg';

const Styles = styled.div`
  margin: 2rem 0;
  button {
    width: 100%;
    text-align: center;
    justify-content: center;
    background: #0D6EFF;
    color: #fff;
  }
  button:hover {
    background: #FB521F;
    border-color: #FB521F;
  }
  svg {
    transform: rotate(35deg);
    margin-right: 0.75em;
  }
`;

export default function ReGenButton({ onClick }) {
  return (
    <Styles>
      <Button onClick={onClick} title="Generate New Secrets">
        <RefreshIcon /> Generate New Secrets
      </Button>
    </Styles>
  );
}
