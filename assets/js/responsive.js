var header = document.querySelector('#header')
const mobileBtn = document.querySelector('.menu-mobile-js')
var headerHeight = header.clientHeight

// Open menu 
mobileBtn.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a');
for (var i = 0 ; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParent) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}