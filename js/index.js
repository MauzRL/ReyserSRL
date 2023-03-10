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