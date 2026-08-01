const content = document.getElementById("content");

document.getElementById("usersTab").onclick = () => {

    location.href = "admin.html";

};

document.getElementById("permissionTab").onclick = () => {

    location.href = "permissions.html";

};

document.getElementById("settingsTab").onclick = () => {

    content.innerHTML = `
        <h2>Settings</h2>
        <p>Coming Soon...</p>
    `;

};

document.getElementById("logoutTab").onclick = async () => {

    await chrome.storage.local.remove([
        "loggedIn",
        "currentUser",
        "loginTime"
    ]);

    location.href = "login.html";

};

