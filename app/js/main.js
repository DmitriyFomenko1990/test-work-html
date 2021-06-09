const burgerIcon = document.querySelector(".burger_js");
const bodyMenu = document.querySelector(".menu_js");
toggleActive(burgerIcon, bodyMenu);

const glasses = document.querySelectorAll(".js-control");
const modalWindow = document.querySelector(".modal-wrapper");
glasses.forEach(block => toggleActive(block, modalWindow));
const modalCross = document.querySelector(".cross_js");
toggleActive(modalCross, modalWindow);

function toggleActive(block, additionalBlock){
    if (block){
        block.addEventListener('click', function (e){
            block.classList.toggle('_active');
            additionalBlock && additionalBlock.classList.toggle('_active');
        })
    }
}