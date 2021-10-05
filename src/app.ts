import { RPN } from './RPN';
/*
write a program that implements a reverse Polish notation calculator.

Your calculator should perform the following operations:
addition, subtraction, multiplication, division, exponentiation, square root

Your program takes a single string as input (the entire reverse Polish notation calculation to be performed) and produces a single line of output (the result of the calculation). You may also wish to add a debug feature that shows the whole process of evaluating the expression however.

Use “(+, -, *, ^, sqrt)” as tokens for your operations.

Let me know if you have any questions or need any help choosing data structures.

Note that your program does not need to handle parentheses, since RPN makes arithmetic operations unambiguous
*/

async function main() {
  try {
    // E.g #1
    const expression = '9 5 3 + 2 4 ^ - +';
    // E.g #2
    // const expression = '4 3 * 8 2 - / 4 8 3 - 3 ^ 5 20 + sqrt / * +';
    const rpn = new RPN(expression); // Expected Output -> 102
    const result = rpn.evaluate();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
main();
