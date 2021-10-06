type Operator = '+' | '-' | '*' | '^' | '/' | 'sqrt';

export class RPN {
  expression: string[];
  token: string[] = ['+', '-', '*', '/', '^', 'sqrt'];
  constructor(expression: string) {
    this.expression = expression.split(' ');
  }
  evaluate() {
    const stack = [];
    this.expression.forEach((item) => {
      if (this.token.includes(item)) {
        // perform operation
        this.performOperation(stack, item as Operator);
      } else {
        stack.push(Number(item));
      }
      console.log(stack);
    });
    return stack;
  }

  performOperation(stack: number[], operation: Operator) {
    let result, x, y;
    // debug
    console.log('Performing Operation', operation);
    switch (operation) {
      case '^':
        y = stack.pop();
        x = stack.pop();
        result = eval(`${x} ** ${y}`);
        break;
      case 'sqrt':
        y = stack.pop();
        result = Math.sqrt(y);
        break;
      default:
        y = stack.pop();
        x = stack.pop();
        result = eval(`${x} ${operation} ${y}`);
    }
    stack.push(result);
  }
}
