var cho = document.querySelector(".cho")
var dcho = document.querySelector(".dcho")
var bm = document.querySelector(".bm")
var h4t = document.querySelector(".h4-text")
h4t.setAttribute('style', 'white-space: pre;');
console.log(cho, dcho)

function randomNumberY(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomNumberX(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var tmp = 1;
var temp = 2;
var dau = 0;
var temp1 = 1;
dcho.addEventListener('click', () => {
    if(tmp === 4){
        bm.style.display = "inherit"
    }
    if(tmp === 5){
        dcho.style.display = "none"
        h4t.textContent = "SUC SINH"

    }
    if(temp >= 5){
        temp = 5;
    }
    if(dau%2 === 0){
        dau = 1;
    }
    else{
        dau = -1;
    }
    temp1 = temp1*2/3;
    dcho.style.transform = "translate(" + randomNumberX(50,100)*tmp*dau + "px" + ", " + randomNumberY(40,100)*tmp*dau + "px)" + "scale(" + temp1 + ")"
    cho.style.transform = "scale(" + temp + ")"
    console.log(tmp)
    tmp +=1;
    temp +=1;
});
cho.addEventListener('click', () => {
    cho.style.display = "none"
    dcho.style.display = "none"
    h4t.textContent = " Cảm ơn cậu nhé hihi! \r\n"
    h4t.textContent += " TÊN : NGUYEN DUC ANH\r\n"
    h4t.textContent += " STK : 0326433268 MB Bank"
})