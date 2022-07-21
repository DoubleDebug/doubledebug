export function getStyles(theme: 'light' | 'dark') {
  if (theme === 'light') {
    return {
      colorBlue: '#63B3ED', // blue.300
      colorLine: '#1572B7',
      iconOutline: '4px solid #1572B7',
    };
  }

  return {
    colorBlue: '#3182CE', // blue.500
    colorLine: 'white',
    iconOutline: 'white',
  };
}
