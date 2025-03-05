// challenge 1
document.querySelector("#theme-btn").addEventListener("click", () => {
    const body = document.querySelector("body");
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme")
    } else {body.classList.add("dark-theme")};
});


// challenge 2

function viewerTemplate(filename, altValue) {
    return `<div class="viewer"> 
        <button class="close-viewer">X</button>
        <img class="viewer-img" src="${filename}" alt="${altValue}">
    </div>`;
}

function closeViewer() {
    document.querySelector(".close-viewer").addEventListener("click", () => {
        document.querySelector(".viewer").remove()
    });
}

function viewerHandle(filename, altValue) {
    const viewer = viewerTemplate(filename, altValue);
    document.querySelector("#large-image").innerHTML = viewer;
    document.querySelector(".hidden").style.display = "block";
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

document.querySelector(".image").addEventListener("click", () => viewerHandle("byui-logo_blue.webp", "image viewer"));


// challenge 3

function cardTemplate () {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    return `<div class="card">
            <h3>${title}</h3>
            <p>${description}</p>
            <button class="delete-btn">Delete</button>
            </div>`
};

function deleteCard() {
    document.querySelector("#cards").addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        }
    });
    
}
// e.target refers to the element being clicked
// explanation: The click happens on the Delete button 🔘.
// But the #cards container is listening for the click.
// The event travels upward from the button → to the parent #cards.
// The e.target is the element where the click happened — in this case, the button.

function addCard() {
    const card = cardTemplate();
    document.querySelector("#cards").insertAdjacentHTML("beforeend", card);
}

function cardHandle() {
    addCard();
    deleteCard();
}

document.querySelector(".card-btn").addEventListener("click", (event) => {
    event.preventDefault();
    cardHandle();
});

// challenge 4
function summaryTemplate() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const food = document.querySelector("#food").value;

    const html = `<div>
    Thank you ${name} for registration. Your email is ${email} and your favorite food is ${food}
    </div>`;
    document.querySelector("#summary").innerHTML = html;
}

document.querySelector("#registration-form").addEventListener("submit", (e) => {
    e.preventDefault();
    summaryTemplate();
    document.querySelector("#summary").classList.remove("hidden");
    document.querySelector("#registration-form").style.display = "none";
})

// challenge 5