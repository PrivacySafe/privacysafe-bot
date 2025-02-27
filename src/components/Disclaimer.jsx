import React from 'react';
import styled from 'styled-components';

const Styles = styled.p`
  background: #1D2D3C;
  padding: 2rem;
  font-size: 0.8em;
  border-radius: ${p => p.theme.borderRadius};
  color: #eee;
  a {
    color: #6ec1e4;
  }
  a:hover {
    color: #fb521f;
    text-decoration: none;
  }
`;

export default function Disclaimer() {
  return (
    <Styles>
      Passwords and passphrases are generated on your device and YOUR DEVICE ONLY. PrivacySafe Bot uses a cryptographically strong {' '}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
        title="Documentation"
      >
        random number generator
      </a>.{' '}
      Passwords and passphrases are NOT COPIED, transmitted, or persisted.
    </Styles>
  );
}
