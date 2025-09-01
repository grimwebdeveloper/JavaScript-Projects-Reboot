// Function to select element
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    // console.log('My element', element);
    return element;
  }
  throw new Error(
    `Please check your ${selection} selector because it does not exist in the code`
  );
}

// Constructor function
function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDom = element.querySelector('.value');
  this.valueDom.textContent = this.value;
}

Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDom.textContent = this.value;
};

Counter.prototype.decrease = function () {
  console.log(this);
  this.value--;
  this.valueDom.textContent = this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDom.textContent = this.value;
};

const firstCounter = new Counter(getElement('#first-counter'), 100);
const secondCounter = new Counter(getElement('#second-counter'), 200);

firstCounter.increase();
