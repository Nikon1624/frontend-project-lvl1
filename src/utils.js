const getRandomNum = (maxNum) => {
  const random = Math.round(Math.random() * maxNum);
  return random !== 0 ? random : getRandomNum(maxNum);
};

export default getRandomNum;
