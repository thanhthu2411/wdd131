function changeTheme() {
    if (document.querySelector("#theme").value === "dark") {
        document.querySelector("body").classList.add("dark") 
        document.querySelector("img").src = "byui-logo_white.png"
    } else {
        document.querySelector("body").classList.remove("dark")
        document.querySelector("img").src = "byui-logo_blue.webp"
    }
}

theme = document.getElementById("theme").addEventListener("change", changeTheme);

