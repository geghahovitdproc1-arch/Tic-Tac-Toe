a = "X";
vin = "";
k = 0
function logic(el) {
    if (el.innerText == "") {

        el.innerText = a;
        k = k + 1

    }

    if (a == "X")
        a = "O";
    else
        a = "X";

    b = document.getElementsByClassName("cell");
    v = [];
    for (i = 0; i < 9; i = i + 1) {
        v[i] = b[i].innerText;
    }

    if (eq(0, 1, 2) == "X" || eq(3, 4, 5) == "X" || eq(6, 7, 8) == "X" || eq(0, 3, 6) == "X"
        || eq(1, 4, 7) == "X" || eq(2, 5, 8) == "X" || eq(0, 4, 8) == "X" || eq(2, 4, 6) == "X") {
        vin = "x";
        bacel("X");
    }

    if (eq(0, 1, 2) == "O" || eq(3, 4, 5) == "O" || eq(6, 7, 8) == "O" || eq(0, 3, 6) == "O"
        || eq(1, 4, 7) == "O" || eq(2, 5, 8) == "O" || eq(0, 4, 8) == "O" || eq(2, 4, 6) == "O") {
        vin = "O"
        bacel("O")

    }
    if (k == 9 && vin == "") {

        bacel("XO")

    }
    function eq(a, b, c) {
        if (v[a] == v[b] && v[a] == v[c] && v[c] != "")
            return v[a];
        else
            return "";
    }
}


function pakel() {

    document.getElementById("vin").style.display = "none"
    for (i = 0; i < 9; i++) {
        b[i].innerText = ""
    }
}
function bacel(a) {
    document.getElementById("vin").style.display = "block"
    if (a == "X") {
        if (document.getElementById("player1").value == "") {
            document.getElementById("vinName").innerText = '\n' + "Խաղը հաղթեց X խաղացողը "
        }
        else {

            document.getElementById("vinName").innerText = "Խաղը հաղթեց"+document.getElementById("player1").value
        }
    }
    if (a == "O") {
        if (document.getElementById("player2").value == "") {
            document.getElementById("vinName").innerText = '\n' + "Խաղը հաղթեց O խաղացողը "
        }
        else {
            document.getElementById("vinName").innerText = "Խաղը հաղթեց"+document.getElementById("player2").value
        }


    }
    if (a == "XO") {
        document.getElementById("vinName").innerText = "Ոչ Ոքի"

    }

    document.getElementById("clickSound").play();
    document.getElementById("clickSound").currentTime = 0;

}
