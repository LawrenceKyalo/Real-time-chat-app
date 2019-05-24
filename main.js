const form = document.querySelector("form");
    const input = document.querySelector(".input");
    const messages = document.querySelector(".messages");
    const username = prompt("Please enter a username: ", "");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        