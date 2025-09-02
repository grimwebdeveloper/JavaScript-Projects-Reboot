// Utility function
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`No element found for selection ${selection}`);
}
