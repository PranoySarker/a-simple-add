const divOne = document.querySelector(".adBody1");
const divTwo = document.querySelector(".adBody2");
const divThree = document.querySelector(".adBody3");
const imgSlider = document.querySelector('.middleImg');


slide();
function slide() {
    divOne.classList.remove("hidden");
    divTwo.classList.add("hidden");
    divThree.classList.add("hidden");
    setTimeout(() => {
        divOne.classList.add("hidden");
        divTwo.classList.remove("hidden");
        setTimeout(() => {
            divOne.classList.add("hidden");
            divTwo.classList.add("hidden");
            divThree.classList.remove("hidden");
            setTimeout(() => {
                slide();
            }, 1000)
        }, 1000)
    }, 1000)
};