// Elment HTML
let spanBnt = document.querySelector(".nav .header .span");
let ulShow = document.querySelector(".nav .header .page-iconts");
let colorsun = document.querySelector(".color");

spanBnt.onclick = function () {
    ulShow.classList.toggle("show")
    spanBnt.style.cssText = "background-color: #3e586d ";
    setTimeout(() => {
        spanBnt.style.cssText = "background-color: transparent";
    }, 250)
}

// Clicked Sun End Moon

function noclik(classColor) {
    colorsun.classList.add(classColor)
    if (!colorsun.classList.contains("fa-moon") && !colorsun.classList.contains("fa-sun")) return colorsun.classList.add("fa-moon");
    if (colorsun.classList.contains("fa-moon")) {
        colorsMoon()
    } else {
        colorsSun()
    }
}

function colorAdd() {
    colorsun.onclick = function () {
        if (window.sessionStorage.getItem("classColor") == "fa-sun") {
            colorsun.classList.remove("fa-sun")
            window.sessionStorage.setItem("classColor", "fa-moon")
            noclik(window.sessionStorage.getItem("classColor"))
        } else {
            colorsun.classList.remove("fa-moon")
            window.sessionStorage.setItem("classColor", "fa-sun")
            noclik(window.sessionStorage.getItem("classColor"))
        }
    };
    noclik(window.sessionStorage.getItem("classColor"))
}

colorAdd()


function colorsSun() {
    document.documentElement.style.setProperty("--color-backgrond", "#fff")
    document.documentElement.style.setProperty("--color-card-re", "#fff")
    document.documentElement.style.setProperty("--color-text", "#2d4253")
    document.documentElement.style.setProperty("--color-text-header", "#026d85")
    document.documentElement.style.setProperty("--form-bg-clr", "#bf93cf73")
}
function colorsMoon() {
    document.documentElement.style.setProperty("--color-backgrond", "#2d4253")
    document.documentElement.style.setProperty("--color-card-re", "#3e586d")
    document.documentElement.style.setProperty("--color-text", "#fff")
    document.documentElement.style.setProperty("--color-text-header", "#fff")
    document.documentElement.style.setProperty("--form-bg-clr", "#dcf1ff70")
}

// Scrool

let topElement = document.querySelector(".top");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        topElement.style.setProperty("display", "block")
        topElement.style.setProperty("bottom", "50px")
    } else {
        topElement.style.setProperty("display", "none")
        topElement.style.setProperty("bottom", "20px")
    }
}

topElement.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}