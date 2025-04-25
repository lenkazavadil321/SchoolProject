class MyClass {
  private count: number = 0;

  incrementCount() {
    this.count++;
    console.log(`Incremented counter from ${this.count} to ${this.count + 1}`);
  }

  decrementCount() {
    if (this.count > 0) {
      this.count--;
      console.log(`Decremented counter from ${this.count} to ${this.count - 1}`);
    }
  }
}

const myClass = new MyClass();
myClass.incrementCount(); // Counter is incremented
myClass.decrementCount(); // Counter is decremented, and the console output reflects the change
