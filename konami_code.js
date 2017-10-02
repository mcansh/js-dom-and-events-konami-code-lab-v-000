const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  let index = 0;
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', (e) => {
    const { which, detail } = e;

    const key = parseFloat(which || detail);

    if (code[index] === key) {
      index += 1;

      if (index === code.length) {
        alert('Hurray!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init();
