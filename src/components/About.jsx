import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  margin: 3rem 0;
  p,
  ul {
    font-size: 0.9em;
  }
  ul {
    padding: 0 0 0 2.5rem;
  }
  li {
    margin: 1rem 0 1.25rem;
    list-style: none;
    position: relative;
    line-height: 1.5;
  }
  li:last-child {
    margin: 1rem 0 0;
  }
  li:before {
    content: '*';
    position: absolute;
    left: -2.25rem;
    top: 0;
    font-weight: bold;
    font-size: 1.25em;
    line-height: 1.2;
  }
`;

export default function About() {
  return (" ");
}
