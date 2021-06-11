const burgerIcon = document.querySelector(".burger_js");
const bodyMenu = document.querySelector(".menu_js");
toggleActive(burgerIcon, bodyMenu);

const glasses = document.querySelectorAll(".js-control");
const modalWrapper = document.querySelector(".modal-wrapper_js");
glasses.forEach(block => toggleActive(block, modalWrapper));
const modalCross = document.querySelector(".cross_js");
toggleActive(modalCross, modalWrapper);
toggleActive(modalWrapper);

function toggleActive(block, additionalBlock){
        block && block.addEventListener('click', function (e){
            if (e.target.isSameNode(block)) {
                block.classList.toggle('_active');
                additionalBlock && additionalBlock.classList.toggle('_active');
            }
        })
}