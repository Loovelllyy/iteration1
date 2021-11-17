const containerDesk = document.getElementsByClassName("container-desk")[0];
const circle = document.getElementsByClassName("circle")[0];
const operands = document.querySelectorAll(".operand");
const btnResult = document.querySelector(".btn-result");
const resultAddition = document.querySelector(".result-addition");

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

containerDesk.addEventListener("click", () => {
    let circleWidth = random(10, 50);
    // circle.style.width = `${circleWidth}px`;
    // circle.style.height = `${circleWidth}px`;
    circle.style.background = `rgb(${random(0, 256)}, ${random(0, 256)}, ${random(0, 256)})`;
    circle.style.left = `${random(0, 500 - circleWidth)}px`;
    circle.style.top = `${random(0, 300 - circleWidth)}px`
})


btnResult.addEventListener("click", () => {
    try {
        console.log("An error has occurred")
        resultAddition.textContent = res;
    } catch (er) {
        alert(`${er.message}, we are trying to fix it `)
        let res = 0;
        operands.forEach(el => {
            res += Number(el.value);
        })
        resultAddition.textContent = res;
    }
})

