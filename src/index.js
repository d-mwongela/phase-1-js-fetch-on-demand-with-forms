const init = () => {
    const form = document.getElementsByTagName("form")[0];
    const h4 = document.querySelector("section > h4");
    const p = document.querySelector("section > p");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const index = form.elements["searchByID"].value;
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((data) => {
                h4.textContent = data[index]["title"];
                p.textContent = data[index]["summary"];
            });
    });
};

document.addEventListener("DOMContentLoaded", init);