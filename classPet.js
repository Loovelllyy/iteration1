const buttons = document.querySelector(".pets-btn");
const pet = document.querySelector(".pet");

class Animal {
    constructor() {
        this.pet = document.querySelector(".pet");
        this.msg = document.createElement("p");
    }

    getCloud(text) {
        if (this.pet.childNodes.length > 1) return;
        this.pet.appendChild(this.msg);
        this.msg.classList.add("msg");
        this.msg.innerHTML = text;
    }

    removeCloud() {
        this.msg.remove();
    }

}

class Pet extends Animal {
    constructor({name}) {
        super();
        this.name = name;
    }

    sayHi() {
        this.getCloud(`Hello! I\`m a ${this.name}`)
    }

    sayVoice(text) {
        this.getCloud(text)
    }

    set checkPet(value) {
        this.name = value;
        return "";
    }

    get checkPet() {
        return (this.name);
    }
}

let cat = new Pet({name: "cat"});
let mouse = new Pet({name: "mouse"})
let name = "";

buttons.addEventListener("click", (ev) => {
    switch (ev.target.textContent) {
        case "Cat":
            pet.classList.add("cat");
            cat.removeCloud();
            mouse.removeCloud();
            name = "cat";
            break;
        case "Mouse":
            pet.classList.remove("cat");
            cat.removeCloud();
            mouse.removeCloud();
            name = "mouse";
            break;
        case "Say hi":
            if (name === "cat") {
                cat.removeCloud();
                mouse.removeCloud();
                cat.sayHi();
            } else {
                mouse.removeCloud();
                cat.removeCloud();
                mouse.sayHi();
            }
            break;
        case "Voice":
            cat.removeCloud();
            mouse.removeCloud();
            if (name === "cat") {
                cat.sayVoice("Meow");
            } else {
                mouse.sayVoice("Pi pi pi");
            }
            break;
    }
})
let parrot = new Pet({name: "parrot"});
console.log(parrot.checkPet);
parrot.checkPet = "cat";
console.log(parrot.checkPet);
parrot.checkPet = "dog";
console.log(parrot.checkPet);