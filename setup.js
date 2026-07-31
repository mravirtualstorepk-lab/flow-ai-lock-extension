async function hashPassword(password){

    const data = new TextEncoder()
        .encode(password);

    const hash = await crypto.subtle.digest(
        "SHA-256",
        data
    );

    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2,"0"))
        .join("");

}


document.getElementById("save")
.addEventListener("click", async()=>{

    const username =
    document.getElementById("username").value.trim();

    const password =
    document.getElementById("password").value.trim();


    if(!username || !password){

        document.getElementById("msg")
        .textContent="Fill all fields";

        return;
    }


    const hash =
    await hashPassword(password);


    await chrome.storage.local.set({

        admin:{
            username:username,
            password:hash
        }

    });


    document.getElementById("msg")
    .textContent="Admin Saved Successfully";

});
