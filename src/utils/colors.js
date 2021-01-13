const colors = [
  '#00FFFF',
  '#FF0000',
  '#ADFF2F',
  '#2196F3',
  '#4CAF50',
  '#009688',
  '#006400',
  '#7FFFD4',
  '#FF9800',
  '#FF00FF',
  '#DAA520',
  '#008080',
  '#00FF00',
  '#FF8C00',
];
export const randomIntegerFromInterval = () => {
  const index = Math.floor(Math.random() * (colors.length - 1));
  return colors[index];
};
