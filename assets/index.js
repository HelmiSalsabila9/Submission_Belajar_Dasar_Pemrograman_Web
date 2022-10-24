let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "genre4") {
            event.target.setAttribute("src", "assets/image/rek3.png");
            return;
        } else if (event.target.id === "genre3") {
            event.target.setAttribute("src", "assets/image/rek4.png");
            return;
        }
    });
}