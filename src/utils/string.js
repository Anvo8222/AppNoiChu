export const checkEnoughWords = (string = '') => {
  if (string.toLowerCase().trim().split(' ').length === 2) {
    return true;
  }
  return false;
};

export const getLastWord = (string = '') =>
  string.trim().split(' ')[0] || string;
