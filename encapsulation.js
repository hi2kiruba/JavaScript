
//JavaScript doesn't have built-in access modifiers like private or protected, but you can achieve encapsulation using closures or naming conventions. 
class Counter {
  constructor() {
    let count = 0; // private variable

    this.increment = function() {
      count++;
      console.log(`Count: ${count}`);
    };

    this.decrement = function() {
      count--;
      console.log(`Count: ${count}`);
    };
  }
}

const counter = new Counter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
