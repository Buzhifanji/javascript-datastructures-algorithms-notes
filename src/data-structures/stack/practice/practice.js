import { Stack } from "../stack.js";

/**
 * 进制转换
 * @param decNumber
 * @param base 进制，例如 2表示转换成2 进制
 */
export function decimalToBinary(decNumber, base) {
  const remStack = new Stack();

  // 转换基数，例如 十六进制
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decNumber;
  let rem;
  let binaryString = "";

  // 处理进制 范围 2-36
  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base); // 取余
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }

  return binaryString;
}
