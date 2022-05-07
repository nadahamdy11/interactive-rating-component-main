 const buttons = document.querySelectorAll(".div-chosse-numbers button");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click", (c) => {
        selected = c.target.textContent
    })
})
// c -> textcontent in num button
submit.addEventListener("click", (c) => {
    if (selected === "") {
        return
    }
    result.textContent = `${selected}`
    basic.classList.add ("result");
    basic2.classList.remove("result");
})
