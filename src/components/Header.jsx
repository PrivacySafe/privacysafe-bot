import React from 'react';
import styled, { css } from 'styled-components';
import SecretTween from 'components/common/SecretTween';
import { media } from 'styles/helpers';

const Styles = styled.header`
  padding: 4rem 0 2rem;
  text-transform: uppercase;
  h2 {
    width: 152px;
    height: 151px;
    background-image:url('privacysafe_logo.png');
    background-repeat: no-repeat;
    float: center;
    text-align: center;
    margin: 0 auto 6px auto;
    padding-bottom: 6px;
  }
  h1 {
    line-height: 1;
    margin: 0 auto;
    text-align: center;
    color: #FB521F;
  }
  h1 > span {
    display: block;
    white-space: nowrap;
    &:first-child {
      font-size: 1.2em;
      color: #FB521F;
    }
    &:nth-child(2) {
      font-size: 0.8em;
      background: -webkit-linear-gradient(#0D6EFF, #279591);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  ${media.tablet`
    padding: 5rem 0 3rem;
    span {
      &:first-child {
      color: #FB521F;
      }
      &:nth-child(2) {
      font-size: 0.9em;
      background: -webkit-linear-gradient(#0D6EFF, #279591);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
    }
  `}
  ${media.desktop`
    padding: 7rem 0 4rem;
  `}
  ${(p) =>
    p.isPwaMode &&
    css`
      padding: 2rem 0 1.5rem;
      h1 > span {
        display: inline-block;
        transform: rotate(0);
        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
          font-size: 1em;
          margin-right: 0.25em;
        }
      }
    `}
`;

export default function Header({ isPwaMode }) {
  return (
    <Styles isPwaMode={isPwaMode}>
      <h2>
      </h2>
      {!isPwaMode ? (
        <h1>
          <span>
            <SecretTween scrambleOnClick alphaNumeric>
              PrivacySafe &nbsp;Bot 
            </SecretTween>
          </span>
          <span>
            <SecretTween scrambleOnClick alphaNumeric>
              Password Generator
            </SecretTween>
          </span>
        </h1>
      ) : (
        <h1>
          <span>
            <SecretTween scrambleOnClick alphaNumeric>
              PrivacySafe &nbsp;Bot 
            </SecretTween>
          </span>
          <span>
            <SecretTween scrambleOnClick alphaNumeric>
              Password Generator
            </SecretTween>
          </span>
        </h1>
      )}
    </Styles>
  );
}
