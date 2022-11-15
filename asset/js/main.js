const buyBtns = document.querySelectorAll('.js-buy-ticket'); // Lấy ra tất cả element có class là ...
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeBtn = document.querySelector('.js-modal-close')
// Hiển thị mua vé
function showBuyTickets() {
    modal.classList.add('open');
}

// Ẩn mua vé
function removeBuyTickets() {
    modal.classList.remove('open');
}

// Lặp qua từng thẻ button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets );
}

// Không phải list không cần lặp qua
    closeBtn.addEventListener('click',removeBuyTickets);
    modal.addEventListener('click',removeBuyTickets);
    modalContainer.addEventListener('click', function (event){
        event.stopPropagation();
    })

/* Mobile responsive : Begin */

// Đóng mở menu

var header = document.getElementById ('header')
var menuHeader = document.getElementById('menuHeader');
var headerHeight = header.clientHeight;
var mobileMenu = menuHeader.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

// Khi nhấn vào item của menu thì đóng menu

var menuItems = document.querySelectorAll ('#nav li a[href*="#"]')
for (var i = 0 ; i<menuItems.length;i++){
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var parentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (parentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
        
    }
}

//Test nhấn more 1 lần nữa để tắt subnav



