let count = 0;

const value = document.querySelector("#count");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("sub")) {
            count--;
        } else if (styles.contains("add")) {
            count++;
        } else if (styles.contains("sav")) {
            count = 0;
        }
        value.textContent = count;
    })
})
