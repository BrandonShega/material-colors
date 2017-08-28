const colorValues = {
  colors: {
    cyan: '#64FCDA',
    blue: '#40C4FF',
    purple: '#FF4081',
    pink: '#FF80AB',
    red: '#FF5252',
    orange: '#FF8A80',
    yellow: '#FFD740',
    green: '#69F0AE',
  },
  grays: {
    gray0: '#1E272C',
    gray1: '#3C4C55',
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
  global: colorValues.colors.purple,
  emphasis: colorValues.colors.pink,
  special: colorValues.colors.orange,
  trivial: colorValues.grays.gray4,
}

export const versionControlGroups = {
  added: colorValues.colors.green,
  modified: colorValues.colors.orange,
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
    red: colorValues.colors.orange,
    green: colorValues.colors.green,
    yellow: colorValues.colors.yellow,
    blue: colorValues.colors.blue,
    magenta: colorValues.colors.pink,
    cyan: colorValues.colors.cyan,
    white: colorValues.grays.gray6,
  },
}
