
const form = document.querySelector("#contact-form__formspree");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("contact-form-status");
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Thanks for your submission!";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML =
                            "Oops! There was a problem submitting your form";
                    }
                });
            }
        })
        .catch(() => {
            status.innerHTML = "Oops! There was a problem submitting your form";
        });
}
