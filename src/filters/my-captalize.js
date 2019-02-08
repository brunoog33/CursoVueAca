export default (value = '', arg1, arg2) => {
  if (!value) return '';
  return `${value} ${arg1} ${arg2}`
    .trim().split(' ')
    .map(substring => substring[0].toUpperCase() + substring.slice(1))
    .join(' ');
};
