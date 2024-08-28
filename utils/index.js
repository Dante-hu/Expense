/**
 * @param {number} num - The number to format
 * @returns {string} - convert number to the string
 */

//format the number to m,k or more
const formatNumber = (num) => {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B";
  }
  if (num >= 1e6) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1e3) {
    return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
};
export default formatNumber;
