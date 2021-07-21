var n = 0;
var items = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
var stop = true;
var button = $(".ticButton");
function stopit() {
    stop = false;
}
button.click(function (event) {
    if (stop === false) return;
    var idd = event.currentTarget.id;
    if (!event.currentTarget.classList.contains("o") && !event.currentTarget.classList.contains("x")) {
        if (n % 2 === 0) {
            event.currentTarget.classList.add("x");
            $(event.currentTarget).html('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');
            if (idd == 1) {
                items[0][0] = 0;
                if (items[0][1] == 0 && items[0][2] == 0 || items[1][0] == 0 && items[2][0] == 0 || items[1][1] == 0 && items[2][2] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }
            }
            else if (idd == 2) {
                items[0][1] = 0;
                if (items[0][0] == 0 && items[0][2] == 0 || items[1][1] == 0 && items[2][1] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
            else if (idd == 3) {
                items[0][2] = 0;
                if (items[0][0] == 0 && items[0][1] == 0 || items[1][2] == 0 && items[2][2] == 0 || items[1][1] == 0 && items[2][0] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
            else if (idd == 4) {
                items[1][0] = 0;
                if (items[0][0] == 0 && items[2][0] == 0 || items[1][1] == 0 && items[1][2] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }
            }
            else if (idd == 5) {
                items[1][1] = 0;
                if (items[0][0] == 0 && items[2][2] == 0 || items[0][1] == 0 && items[2][1] == 0 || items[0][2] == 0 && items[2][0] == 0 || items[1][0] == 0 && items[1][2] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
            else if (idd == 6) {

                items[1][2] = 0;
                if (items[0][2] == 0 && items[2][2] == 0 || items[1][0] == 0 && items[1][1] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }
            }
            else if (idd == 7) {
                items[2][0] = 0;
                if (items[0][0] == 0 && items[1][0] == 0 || items[0][2] == 0 && items[1][1] == 0 || items[2][1] == 0 && items[2][2] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
            else if (idd == 8) {
                items[2][1] = 0;
                if (items[2][0] == 0 && items[2][2] == 0 || items[0][1] == 0 && items[1][1] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
            else if (idd == 9) {
                items[2][2] = 0;
                if (items[0][0] == 0 && items[1][1] == 0 || items[0][2] == 0 && items[1][2] == 0 || items[2][0] == 0 && items[2][1] == 0) {
                    $("h1").text("Player 1 Wins!");
                    stopit();
                }

            }
        }

        else if (n % 2 === 1) {
            event.currentTarget.classList.add("o");
            if (idd == 1) {
                items[0][0] = 1;
                if (items[0][1] == 1 && items[0][2] == 1 || items[1][0] == 1 && items[2][0] == 1 || items[1][1] == 1 && items[2][2] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }
            }
            else if (idd == 2) {
                items[0][1] = 1;
                if (items[0][0] == 1 && items[0][2] == 1 || items[1][1] == 1 && items[2][1] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
            else if (idd == 3) {
                items[0][2] = 1;
                if (items[0][0] == 1 && items[0][1] == 1 || items[1][2] == 1 && items[2][2] == 1 || items[1][1] == 1 && items[2][0] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
            else if (idd == 4) {
                items[1][0] = 1;
                if (items[0][0] == 1 && items[2][0] == 1 || items[1][1] == 1 && items[1][2] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }
            }
            else if (idd == 5) {
                items[1][1] = 1;
                if (items[0][0] == 1 && items[2][2] == 1 || items[0][1] == 1 && items[2][1] == 1 || items[0][2] == 1 && items[2][0] == 1 || items[1][0] == 1 && items[1][2] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
            else if (idd == 6) {

                items[1][2] = 1;
                if (items[0][2] == 1 && items[2][2] == 1 || items[1][0] == 1 && items[1][1] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }
            }
            else if (idd == 7) {
                items[2][0] = 1;
                if (items[0][0] == 1 && items[1][0] == 1 || items[0][2] == 1 && items[1][1] == 1 || items[2][1] == 1 && items[2][2] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
            else if (idd == 8) {
                items[2][1] = 1;
                if (items[2][0] == 1 && items[2][2] == 1 || items[0][1] == 1 && items[1][1] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
            else if (idd == 9) {
                items[2][2] = 1;
                if (items[0][0] == 1 && items[1][1] == 1 || items[0][2] == 1 && items[1][2] == 1 || items[2][0] == 1 && items[2][1] == 1) {
                    $("h1").text("Player 2 Wins!");
                    stopit();
                }

            }
        }
        n++;
        if (n == 9) {
            // document.querySelector("h1");

            if (document.querySelector("h1").innerText == "Tic-Tac-Toe!")
                $("h1").text("Draw!");
        }
    }
});
$(".refresh").click(function () {
    location.reload();
});