const hiBtn = document.getElementById("sayHi");
// const pet = document.querySelector(".pet");
// const msg = document.createElement("p");
//
//
// const getCloud = () => {
//     console.log(6523)
//     pet.appendChild(msg);
//     msg.classList.add("msg")
// }

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         alert(this.name);
//     }
// }

class Pet {
    constructor(name) {
        this.name = name;

    }



    getCloud() {
        let pet = document.querySelector(".pet");
        let msg = document.createElement("p");
        pet.appendChild(msg);
        msg.classList.add("msg");
        msg.innerHTML = `Hello! I\`m ${this.name}`;
    }


    sayHi() {
        this.getCloud("cat")
    }

    sayAny(){
        this.getCloud("any")
    }
}

let cat = new Pet("cat");
let mouse = new Pet("mouse")

hiBtn.addEventListener("click", () => {

    mouse.sayAny();

})