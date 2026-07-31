const USERNAME = "admin";
const PASSWORD = "123456";

document.getElementById("login").addEventListener("click", async () => {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === USERNAME && password === PASSWORD) {

        await chrome.storage.local.set({
            loggedIn: true
        });

        chrome.tabs.create({
            url: "https://labs.google/fx/tools/flow"
        });

        window.close();

    } else {

        document.getElementById("msg").textContent =
            "Invalid Username or Password";

    }

});
