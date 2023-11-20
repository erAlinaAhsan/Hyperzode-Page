var menuIcon = document.querySelector('.bars');
var sidebar = document.querySelector('.sidebar');
var container = document.querySelector(".container");
menuIcon.onclick = function () {
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle("small-container");
}
