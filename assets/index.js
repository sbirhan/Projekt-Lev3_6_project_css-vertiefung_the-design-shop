
var drwer=document.getElementById("drawer")

function moveDrawer() {

    if (drwer.style.visibility=="hidden") {
        drwer.style.visibility="visible";
    }
    else {
        drwer.style.visibility="hidden";
    }

    return;
}


moveDrawer();
