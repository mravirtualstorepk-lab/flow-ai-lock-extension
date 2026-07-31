const status =
document.getElementById("status");


chrome.storage.local.get(
["loggedIn"],
(result)=>{


if(result.loggedIn){

status.textContent =
"✅ Logged In";

}else{

status.textContent =
"❌ Not Logged In";

}


});


document
.getElementById("openFlow")
.onclick=()=>{

chrome.tabs.create({

url:
"https://labs.google/fx/tools/flow"

});

};



document
.getElementById("logout")
.onclick=()=>{


chrome.storage.local.set({

loggedIn:false,
loginTime:null

},()=>{

status.textContent =
"Logged Out";

});


};
