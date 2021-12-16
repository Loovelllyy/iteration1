const input = document.querySelector(".input-username");
const promiseBtn = document.querySelectorAll(".action-btn")[1];
const asyncAwaitBtn = document.querySelectorAll(".action-btn")[2];
const page = document.querySelector(".new-page");


const throwErr = (e) => {

    const errorBlock = document.createElement("div");
    errorBlock.classList.add("error");

    const errorText = document.createElement("p");
    errorText.innerHTML = `Произошла ошибка загрузки данных :с <br> Попробуйте обновить страницу`;

    console.log(e);
    errorBlock.appendChild(errorText);
    page.appendChild(errorBlock);
}

const createUl = (arr) => {
    const ol = document.createElement('ol');
    if (page.querySelector('ol')) {
        const ol = page.querySelector('ol');
        page.removeChild(ol);
    }
    // console.log(page.contains('ol'))
    for(let repos of arr) {
        const li = document.createElement('li');
        li.textContent = `${repos.name}`;
        ol.appendChild(li);
    }
    page.appendChild(ol);
}

const searchRepPromise = (username) => {
    const url = 'https://api.github.com/users/' + username + '/repos';
    fetch(url)
        .catch(e => throwErr(e))
        .then(res => {
            if (!(res.status === 200)) throw new Error()
            else return res.json()
        })
        .then(arr => {
            createUl(arr);
        })

}

const searchRepAsyncAwait = async (username) => {
    try {
        const url = 'https://api.github.com/users/' + username + '/repos';
        const res = await fetch(url);

        if (!(res.status === 200)) throw new Error();
        else {
            const arr = await res.json();
            createUl(arr);
        }
    }
    catch (e) {
        throwErr(e);
    }
}

const check = () => {
  // if (page.)

}

promiseBtn.addEventListener('click', () => {
    if (!input.value) alert("input username");
    else searchRepPromise(input.value);
})

asyncAwaitBtn.addEventListener('click', () => {
    if (!input.value) alert("input username");
    else searchRepAsyncAwait(input.value);
})

