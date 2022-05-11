const count = document.querySelector('.count');
const buttons = document.querySelector('.container-footer');

buttons.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-subtract")) {
        count.innerHTML--;
        setColor();
    }
    if(e.target.classList.contains("btn-add")) {
        count.innerHTML++;
        setColor();
    }
    if(e.target.classList.contains("btn-reset")) {
        count.innerHTML = 0;
        setColor();
    }
});

const setColor = () => {
    if(count.innerHTML > 0) {
        count.style.color = '#3094ff';
    } else if(count.innerHTML < 0) {
        count.style.color = '#6243ff';
    } else {
        count.style.color = '#fff';
    }
}