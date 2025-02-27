const version = '2025.02.26';

const modes = {
  PW: 'password',
  PP: 'passphrase'
};

const initParams = {
  [modes.PW]: {
    length: 16,
    upper: true,
    lower: true,
    numbers: true,
    symbols: false
  },
  [modes.PP]: {
    length: 5,
    delimiter: 'hyphen'
  }
};

const localStorageKeys = {
  params: `psafe-bot-dev-params-${version}`,
  mode: `psafe-bot-dev-mode-${version}`
};

const strengthsEnum = {
  OK: 'weak: get pwned',
  GOOD: 'good: tough to crack',
  STRONG: 'strong: secret agent tier'
};

export default {
  version,
  modes,
  initParams,
  localStorageKeys,
  strengthsEnum,
  GAPropertyId: ''
};
