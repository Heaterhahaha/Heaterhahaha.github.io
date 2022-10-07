const plus = '<div class="main"><div class="bottom" >  </div ><div class="kz"><div class="jia" onclick="Pluss(this.parentNode.parentNode)">+↑</div><div class="jia" onclick="Plusx(this.parentNode.parentNode)">+↓</div><div class="jia" onclick="Delete(this.parentNode.parentNode)">-</div><div class="jia" onclick="Up(this)">↑</div><div class="jia" onclick="Down(this)">↓</div></div><div class="page" contenteditable="true"></div></div >'
arr();
function Pluss(node) {
    node.insertAdjacentHTML('beforebegin', plus)
    arr()
}
function Plusx(node) {
    node.insertAdjacentHTML('afterend', plus)
    arr()
}
function Delete(node) {
    node.remove()
    arr()
}
function Up(node) {
    var a = node.parentNode.parentNode.children[2].innerHTML;
    node.parentNode.parentNode.children[2].innerHTML = node.parentNode.parentNode.previousElementSibling.children[2].innerHTML;
    node.parentNode.parentNode.previousElementSibling.children[2].innerHTML = a;
}
function Down(node) {
    var a = node.parentNode.parentNode.children[2].innerHTML;
    node.parentNode.parentNode.children[2].innerHTML = node.parentNode.parentNode.nextElementSibling.children[2].innerHTML;
    node.parentNode.parentNode.nextElementSibling.children[2].innerHTML = a;
}
function Open(node) {
    if (node.parentNode.children[1].style.display != "none") {
        node.parentNode.children[1].style.display = "none";
        node.style.left = "10px";
    }
    else {
        node.parentNode.children[1].style.display = "block";
        node.style.left = "320px";
    }
}
function arr() {
    let array = document.getElementsByClassName("main");
    for (let i = 0; i < array.length; i++) {
        array[i].children[0].innerHTML=i+1;

    }
}