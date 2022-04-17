const checked = (cart, item) => {
  let isCheck = cart.findIndex((cart) => cart.id === item.id);
  if (isCheck < 0) isCheck = false;
  else isCheck = true;
  return isCheck
};
export default checked;
