const status = document.getElementById("status");

chrome.storage.local.get(["loggedIn","currentUser"], (result) => {

    if(result.loggedIn){

        status.textContent =
        "Logged in: " + result.currentUser.username;

    }else{

        status.textContent =
        "Not Logged In";

    }

});

document.getElementById("openFlow").onclick = ()=>{

    chrome.tabs.create({
        url:"https://labs.google/fx/tools/flow"
    });

};

document.getElementById("logout").onclick = ()=>{

    chrome.storage.local.clear(()=>{
        status.textContent="Logged Out";
    });

};
