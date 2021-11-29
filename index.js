const containerDesk = document.getElementsByClassName("container-desk")[0];
const circle = document.getElementsByClassName("circle")[0];
const operands = document.querySelectorAll(".operand");
const btnResult = document.querySelector(".btn-result");
const resultAddition = document.querySelector(".result-addition");
const calcBtn = document.querySelector(".calc");
const table = document.querySelector(".table");
const [output1, output2, output3] = document.querySelectorAll(".outputs");
const click = document.getElementById("click-btn");

const random = (min = 0, max = 256) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

containerDesk.addEventListener("click", () => {
    let circleWidth = random([10, 50]);
    circle.style.background = `rgb(${random()}, ${random()}, ${random()})`;
    circle.style.left = `${random(0, 500 - circleWidth)}px`;
    circle.style.top = `${random(0, 300 - circleWidth)}px`;
})

circle.addEventListener("mouseover", () => {
    circle.style.background = `rgb(${random()}, ${random()}, ${random()})`;
    circle.style.background = `rgb(${random()}, ${random()}, ${random()})`;
})

btnResult.addEventListener("click", () => {
    try {
        console.log("An error has occurred");
        resultAddition.textContent = res;
    } catch (er) {
        alert(`${er.message}, we are trying to fix it `);
        let res = 0;
        operands.forEach(el => {
            res += +el.value;
        })
        resultAddition.textContent = res;
    }
})

calcBtn.addEventListener("click", (ev)  => {
    switch (ev.target.textContent) {
        case 'top - bottom':
            resultAddition.textContent = `${+operands[0].value - +operands[1].value}`;
            break;
        case 'top * button':
            resultAddition.textContent = `${+operands[0].value * +operands[1].value}`;
            break;
        case 'top / bottom':
            resultAddition.textContent = `${Number(operands[0].value) / Number(operands[1].value)}`;
            break;
        case 'top ^ bottom':
            resultAddition.textContent = `${Math.pow(+operands[0].value, +operands[1].value)}`;
            break;
    }
})

let arr = [];
const sum = (...arr) => {
    let sum = 0;
    for (let arg of arr) {
        sum += arg
    }
    return sum;
}

table.addEventListener("click", (ev) => {
    if (+ev.target.textContent) {
        arr.push(+ev.target.textContent)
        output2.textContent = `Максимальное кликнутое: ${Math.max(...arr)}`
        output3.textContent = `Сумма кликнутых чисел: ${sum(...arr)}`
    }
})


function* testGen() {
    for (let x = 1;; x++) {
        yield x;
    }
}
let g = testGen();

click.addEventListener("click", () => {
    output1.textContent = `Количество кликов: ${g.next().value}`;
})