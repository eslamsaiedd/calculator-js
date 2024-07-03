let inputBox = document.querySelector(".input")
let calc = document.querySelectorAll(".calc")
let string = ""
let arr = Array.from(calc);
arr.forEach(arr => {
    arr.addEventListener("click",(e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            inputBox.value = string
        }else if (e.target.innerHTML == "AC" ) {
            string = ""
            inputBox.value = string
        }else if (e.target.innerHTML == "DEL") {
            string = string.substring(0,string.length - 1)
            inputBox.value = string
        }else if (e.target.innerHTML == "%") {
            string = string / 100
            inputBox.value = string
        }else {
            string += e.target.innerHTML
            inputBox.value = string
        }
    })
});