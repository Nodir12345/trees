const topButtons = document.querySelectorAll('.top');
const bottomButtons = document.querySelectorAll('.bottom');

topButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentDiv = button.parentElement;
    if (index !== 0) {
      const previousDiv = topButtons[index - 1].parentElement;
      currentDiv.parentNode.insertBefore(currentDiv, previousDiv);
    }
    updateButtonVisibility();
  });
});

bottomButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const currentDiv = button.parentElement;
    if (index !== bottomButtons.length - 1) {
      const nextDiv = bottomButtons[index + 1].parentElement;
      currentDiv.parentNode.insertBefore(nextDiv, currentDiv);
    }
    updateButtonVisibility();
  });
});

function updateButtonVisibility() {
  topButtons.forEach((button, index) => {
    if (index === 0) {
      button.style.visibility = 'hidden';
    } else {
      button.style.visibility = 'visible';
    }
  });

  bottomButtons.forEach((button, index) => {
    if (index === bottomButtons.length - 1) {
      button.style.visibility = 'hidden';
    } else {
      button.style.visibility = 'visible';
    }
  });
}
