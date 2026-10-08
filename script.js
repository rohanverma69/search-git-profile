let input = document.querySelector("#username");
let button = document.querySelector("button");

let left = document.querySelector(".left");
let right = document.querySelector(".right");

button.addEventListener("click", async function () {

    let username = input.value.trim();

    if (username === "") {
        alert("Please enter GitHub username");
        return;
    }

    let api = `https://api.github.com/users/${username}`;

    let response = await fetch(api);

    if (!response.ok) {
        alert("User not found");
        return;
    }

    let data = await response.json();

    console.log(data);

    // Profile Image
    left.innerHTML = `
        <img src="${data.avatar_url}" alt="Profile">
    `;

    // Profile Details
    right.innerHTML = `
        <h2>Name: ${data.name || "Not Available"}</h2>
        <br>

        <h2>Bio: ${data.bio || "Not Available"}</h2>
        <br>

        <h2>Location: ${data.location || "Not Available"}</h2>
    `;
});