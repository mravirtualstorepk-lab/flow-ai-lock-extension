document.getElementById("save").onclick = async () => {

    const permissions = {

        gmail: document.getElementById("gmail").checked,

        drive: document.getElementById("drive").checked,

        youtube: document.getElementById("youtube").checked,

        chatgpt: document.getElementById("chatgpt").checked,

        maps: document.getElementById("maps").checked,

        photos: document.getElementById("photos").checked,

        calendar: document.getElementById("calendar").checked,

        meet: document.getElementById("meet").checked,

        gemini: document.getElementById("gemini").checked,

        flow: document.getElementById("flow").checked

    };

    await chrome.storage.local.set({
        permissions
    });

    alert("Permissions Saved");

};
