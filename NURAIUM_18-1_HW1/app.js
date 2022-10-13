const idInput = document.querySelector('.idInput');
const idCheck = document.getElementsByClassName('idCheck');
const idResult = document.querySelector('.idResult');
const regExp = /^0\d{13}$|1\d{13}$/
idCheck[0].addEventListener('click', () => {
    if(regExp.test(idInput.value)){
        idResult.innerText = "ok"
        idResult.style.color = "green"
    }else{
        idResult.innerText = "not ok" 
        idResult.style.color = "red"
    }
})



const block2 = document.querySelector('.block2');

let number = 0;
const zoom = function (Blockleft) {
    number++;
    block2.style.left = `${number}px`;
    if (number < 50){
        return zoom();
    }else if (number > 349){
        number = 0;
    }else {
        number += 50;
    }
    Blockleft()
}
block2.addEventListener('click', zoom)