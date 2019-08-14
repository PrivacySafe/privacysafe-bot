import React from 'react';
import styled, { withTheme } from 'styled-components';
import config from 'config';
import { animated, useSpring } from 'react-spring';
import { media } from 'styles/helpers';

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0 -2rem;
  padding: 1rem 1rem;
  line-height: 1;
  font-size: 0.8em;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 1rem,
    hsla(0, 0%, 0%, 0.05) 1rem,
    hsla(0, 0%, 0%, 0.05) 2rem
  );
  span:first-child {
    font-size: 3em;
  }
  span:nth-child(2) {
    font-weight: bold;
  }
  span:nth-child(3) {
  }
  ${media.tablet`
    font-size: 1em;
    margin: 0;
  `}
`;

const Animated = animated(Styles);

function Meter({ entropy, theme }) {
  const { strengthsEnum } = config;
  const getStrength = bits => {
    if (bits <= 45) return strengthsEnum.OK;
    if (bits > 45 && bits <= 60) return strengthsEnum.GOOD;
    if (bits > 60) return strengthsEnum.STRONG;
  };
  const strength = getStrength(entropy);
  const emoji =
    strength === strengthsEnum.OK ? '😬' : strength === strengthsEnum.GOOD ? '🙂' : '😎';
  const backgroundSpring = useSpring({
    config: { duration: 400 },
    backgroundColor: theme.meterColors[strength],
    boxShadow: `0 0 1rem ${theme.meterColors[strength]}`
  });

  return (
    <Animated style={backgroundSpring}>
      <span role="img" aria-label={strength}>
        {emoji}
      </span>
      <span>{strength}</span>
      <span>~{Math.round(entropy)} bits of entropy</span>
    </Animated>
  );
}

export default withTheme(Meter);
