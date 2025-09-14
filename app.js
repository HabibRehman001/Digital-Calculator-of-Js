let cal = (e) => {
  let inpt = document.querySelector('#inpt');
  inpt.value += e;
};

let ac = () => {
  let inpt = document.querySelector('#inpt');
  inpt.value = '';
};

let dc = () => {
  let inpt = document.querySelector('#inpt');
  inpt.value = inpt.value.slice(0, -1);
};

let calculate = () => {
  let inpt = document.querySelector('#inpt');
  let expression = inpt.value;

  // handle multiplication symbol
  expression = expression.replace(/x/g, '*');

  try {
    let result = eval(expression);
    inpt.value = result;
  } catch {
    inpt.value = "Error";
  }
};
