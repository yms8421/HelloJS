var bt = document.getElementById("btn");
var tx = document.getElementById("txt");
bt.onclick = function () {
    var ul = document.getElementById("list");
    if (!tx.value) {
        toggleError();
    }
    else {
        var newLi = document.createElement("li");
        newLi.innerText = tx.value;
        ul.appendChild(newLi);
        tx.value = "";
    }
    hideControl("warning");
    //alert("Merhaba ben buton");
}

tx.onkeyup = function () {
    if (this.value) {
        hideControl("error");
        hideControl("warning");
    }
    else {
        showControl("warning");
    }
}

window.onload = setupContainer;
window.onresize = setupContainer;

function setupContainer() {
    var container = document.getElementById("work");
    container.style.marginLeft = ((window.innerWidth / 2) - (container.clientWidth / 2)) + "px";
}

function toggleError() {
    var err = showControl("error");
    setTimeout(function () {
        hideControl(err);
    }, 3000);
}

function hideControl(ctrl) {
    if (typeof ctrl == "object") {
        ctrl.style.display = "none";
        return;
    }
    var c = document.getElementById(ctrl);
    c.style.display = "none";
}

function showControl(ctrlName) {
    var err = document.getElementById(ctrlName);
    err.style.display = "block";
    return err;
}