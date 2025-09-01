// Function to select element
function getElement(targetElement) {
  const element = document.querySelector(targetElement);
  if (element) {
    return element;
  }
  throw new Error(`Check your selector!`);
}

class Counter {
  constructor(element, value) {
    this.element = element;
    this.value = value;
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.resetBtn = element.querySelector('.reset');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.innerText = this.value;
    // Event listeners
    this.increaseBtn.addEventListener('click', this.increase.bind(this));
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    this.resetBtn.addEventListener('click', this.reset.bind(this));
  }
  increase() {
    this.value++;
    this.valueDOM.innerText = this.value;
  }
  decrease() {
    this.value--;
    this.valueDOM.innerText = this.value;
  }
  reset() {
    this.value = 0;
    this.valueDOM.innerText = this.value;
  }
}

const firstCounter = new Counter(getElement('#first-counter'), 1);
const secondCounter = new Counter(getElement('#second-counter'), 100);
