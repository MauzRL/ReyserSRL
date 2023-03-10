const card = document.getElementById("contact_card");
const front = document.getElementById('front');
const back = document.getElementById('back')

front.addEventListener("click", () => {
    front.classList.add('hide');
    front.classList.remove('show');

    back.classList.add('show')
    back.classList.remove('hide')

})

back.addEventListener("click", () => {
    back.classList.add('hide');
    back.classList.remove('show');

    front.classList.add('show')
    front.classList.remove('hide')
})

 /*Cambiar color del menu al hacer Scroll*/

 window.onscroll = function(){

    scroll = document.documentElement.scrollTop;

    header = document.querySelector("header");

    if (scroll > 100){
        header.classList.add('header_active');
    }else if (scroll < 100){
        header.classList.remove('header_active');
    }

}