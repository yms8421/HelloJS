$("#btn").click(function () {
    var txt = $("#txt");
    if (!txt.val()) {
        toggleError();
    }
    else {
        $("#list").append("<li>" + txt.val() + "</li>");
        txt.val("");
    }
    hideControl("#warning");
});

$("#txt").keyup(function () {
    if (this.value) {
        hideControl("#error");
        hideControl("#warning");
    }
    else {
        showControl("#warning");
    }
});

window.onload = setupContainer;
window.onresize = setupContainer;

function setupContainer() {
    var container = $("#work");
    container.css("margin-left", ((window.innerWidth / 2) - (container.width() / 2)) + "px");

    //container.css({
    //    "display": "block",
    //    "color": "#FFF",
    //    "font-size": "24px"
    //});
}

function toggleError() {
    var err = showControl("#error");
    setTimeout(function () {
        hideControl(err);
    }, 3000);
}

function hideControl(ctrl) {
    if (typeof ctrl == "object") {
        ctrl.css("display", "none");
        return;
    }
    var c = $(ctrl);
    c.css("display", "none");
}

function showControl(ctrlName) {
    var err = $(ctrlName);
    err.css("display", "block");
    return err;
}