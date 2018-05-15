const colorValues = {
  colors: {
    cyan: '#64FCDA',
    brightCyan: '#A7FDEB',
    blue: '#40C4FF',
    brightBlue: '#80D8FF',
    magenta: '#FF4081',
    brightMagenta: '#FF80AB',
    red: '#FF5252',
    brightRed: '#FF8A80',
    yellow: '#FFD740',
    brightYellow: '#FFE57F',
    green: '#69F0AE',
    brightGreen: '#B9F6CA',
  },
  grays: {
    gray0: '#1E272C',
    gray1: '#263238',
    gray2: '#556873',
    gray3: '#6A7D89',
    gray4: '#B0BEC5',
    gray5: '#FFFFFF',
    gray6: '#FFFFFF',
  },
}

export default colorValues

export const uiGroups = {
  userActionNeeded: colorValues.colors.red,
  userCurrentState: colorValues.colors.cyan,
  backgroundShade: colorValues.grays.gray0,
  background: colorValues.grays.gray1,
  foreground: colorValues.grays.gray5,
  ...colorValues.grays,
}

export const syntaxGroups = {
  constant: colorValues.colors.cyan,
  identifier: colorValues.colors.blue,
  statement: colorValues.colors.yellow,
  type: colorValues.colors.green,
  global: colorValues.colors.magenta,
  emphasis: colorValues.colors.brightMagenta,
  special: colorValues.colors.brightRed,
  trivial: colorValues.grays.gray4,
}

export const versionControlGroups = {
  added: colorValues.colors.green,
  modified: colorValues.colors.brightRed,
  removed: colorValues.colors.red,
  renamed: colorValues.colors.blue,
}

export const ansiGroups = {
  normal: {
    black: uiGroups.background,
    red: colorValues.colors.red,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.purple,
    cyan: colorValues.colors.cyan,
    white: uiGroups.foreground,
  },
  bright: {
    black: colorValues.grays.gray4,
    red: colorValues.colors.brightRed,
    green: colorValues.colors.brightGreen,
    yellow: colorValues.colors.brightYellow,
    blue: colorValues.colors.brightBlue,
    magenta: colorValues.colors.brightMagenta,
    cyan: colorValues.colors.brightCyan,
    white: colorValues.grays.gray6,
  },
}
