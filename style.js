let btn = document.getElementById("btn");
let counter = document.getElementById("counter");
let text = document.getElementById("text");

let start = false;

btn.addEventListener('click', () => {
    start = true;
    let num = 0;

    let interval = setInterval(() => {
        counter.textContent = num;

        if (num === 10) {
            counter.style.color = "black";
            text.style.color = "black";
            text.textContent = "Siz 10 gacha bo'lgan raqamlardasiz";
        }
        else if (num === 20) {
            counter.style.color = "white";
            text.style.color = "white";
            text.textContent = "Siz 20 gacha bo'lgan raqamlardasiz";
        }
        else if (num === 30) {
            counter.style.color = "purple";
            text.style.color = "purple";
            text.textContent = "Siz 30 gacha bo'lgan raqamlardasiz";
            let container = document.createElement("div");
            container.style.width = "200px";
            container.style.height = "200px";
            container.style.background = "red";
            document.body.appendChild(container);
        }
        else if (num === 40) {
            counter.style.color = "yellow";
            text.style.color = "yellow";
            text.textContent = "Siz 40 gacha bo'lgan raqamlardasiz";
            let img = document.createElement("img");
            img.src = "images.png";
            img.style.width = "150px";
            img.style.height = "150px"
            document.body.appendChild(img);

            clearInterval(interval);
        }

        num++;
    }, 1000)
})