window.addEventListener('load', function () {

    const _boxs = document.querySelectorAll('.col');
    let domOne = null, domTwo = null;

    for (let _box of _boxs) {
        _box.addEventListener("click", function () {

            if (!domOne) {
                domOne = this;

            }else if (!domTwo) {
                 domTwo = this;
                 domTwo.innerHTML=domOne.innerHTML; 
                 domOne.innerHTML="";
                 domOne=null;
                 domTwo=null; 
                }

        })
    }
    // console.log(0.1 + 0.2 === 0.3) // true
    // console.log(0.1 + 0.6 === 0.7) // true
    // console.log(0.1 + 0.7 === 0.8) // true

    // console.log(0.1 + 0.2) // 0.3
    // console.log(0.1 + 0.6) // 0.7
    // console.log(0.1 + 0.7) // 0.8

    // console.log(0.1) // 0.1
    // console.log(0.1) // 0.1
    // console.log(0.1) // 0.1

    // console.log(0.2) // 0.2
    // console.log(0.6) // 0.6
    // console.log(0.7) // 0.7







})