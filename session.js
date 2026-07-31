const SESSION_TIME = 30 * 60 * 1000; // 30 منٹ


async function checkSession(){

    const data = await chrome.storage.local.get([
        "loggedIn",
        "loginTime"
    ]);


    if(!data.loggedIn){

        return false;

    }


    if(!data.loginTime){

        return false;

    }


    const currentTime = Date.now();


    if(currentTime - data.loginTime > SESSION_TIME){


        await chrome.storage.local.set({

            loggedIn:false,
            loginTime:null

        });


        return false;

    }


    return true;

}


// ہر 5 منٹ بعد چیک کریں
setInterval(()=>{

    checkSession();

}, 5 * 60 * 1000);
