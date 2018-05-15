import colorValues, {
  uiGroups,
  syntaxGroups,
  versionControlGroups,
  ansiGroups,
}  from './index'

test('colors values', () => {
  expect(colorValues.colors.cyan).toBe('#64FCDA')
  expect(colorValues.grays.gray4).toBe('#B0BEC5')
})

test('UI group mappings to color values', () => {
  expect(uiGroups.userActionNeeded).toBe(colorValues.colors.red)
  expect(uiGroups.gray5).toBe(colorValues.grays.gray5)
})

test('syntax group mappings to color values', () => {
  expect(syntaxGroups.type).toBe(colorValues.colors.green)
})

test('version control group mappings to color values', () => {
  expect(versionControlGroups.renamed).toBe(colorValues.colors.blue)
})

test('ansi group mappings to color values', () => {
  expect(ansiGroups.normal.cyan).toBe(colorValues.colors.cyan)
  expect(ansiGroups.bright.red).toBe(colorValues.colors.brightRed)
})
