document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".options li");
    const submitButton = document.querySelector(".submit");

    options.forEach(option => {
        option.addEventListener("click", function () {
            options.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
        });
    });

    submitButton.addEventListener("click", function () {
        const selected = document.querySelector(".options li.selected");
        if (selected) {
            if (selected.getAttribute("data-correct") === "true") {
                alert("Correct answer! ✅");
            } else {
                alert("Wrong answer! ❌ Try again.");
            }
        } else {
            alert("Please select an answer.");
        }
    });
});
