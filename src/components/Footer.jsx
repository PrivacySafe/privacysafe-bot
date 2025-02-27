import React from 'react';
import styled from 'styled-components';
import config from 'config';
import { ReactComponent as Heart } from 'images/heart.svg';

const StyledContainer = styled.div`
  padding: 3rem 0;
  text-align: center;
  font-size: 0.7em;
  .v {
    font-family: ${p => p.theme.fontFixed};
  }
  svg {
    height: 1em;
    color: crimson;
    margin: 0 0 -0.25rem 0;
  }
`;

const Footer = () => {
  return (
    <StyledContainer>
      <span className="v">v{config.version}</span>
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    <a href="https:\/\/psafe.ly/BbQTXH" target="_blank" style={{color: '#fb521f'}}>PrivacySafe</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/5kbQYU" target="_blank" style={{color: '#6ec1e4'}}>Source</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/bugs" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Bugs?</a>
                    <span style={{color: '#ffffff'}}> | </span> <a href="https:\/\/psafe.ly/7FNWKG" id="contact" target="_blank" style={{color: '#6ec1e4'}}>Terms of Use</a>
                </p>
            </div>
    </StyledContainer>
  );
};

export default Footer;
