document.getElementById("login").addEventListener("click", async () => {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const data = await chrome.storage.local.get("users");
    const users = data.users || [];

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if (!user) {
        document.getElementById("msg").textContent =
            "Invalid Username or Password";
        return;
    }

    await chrome.storage.local.set({
        loggedIn: true,
        currentUser: user,
        loginTime: Date.now()
    });

    chrome.tabs.create({
        url: "https://labs.google/fx/tools/flow"
    });

    window.close();
});
