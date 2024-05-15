
let count = 0;

const span = document.querySelector("#span");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count>0){
            span.style.color="blue"
        }
        if (count<0){
            span.style.color="red"
        }
        if (count===0){
            span.style.color="black"
        }
        span.textContent = count;
    });
});