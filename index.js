const dodger = document.getElementById("dodger");
undefined
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
undefined
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
undefined
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }