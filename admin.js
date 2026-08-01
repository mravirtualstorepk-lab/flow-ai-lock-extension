
async function loadUsers(){

    const users = await DB.getUsers();

    const container = document.getElementById("users");

    container.innerHTML = "";

    users.forEach((user,index)=>{

        container.innerHTML += `
        <div class="user-card">

            <div>

                <b>${user.username}</b>

                <br>

                ${user.role}

            </div>

            <button class="delete-btn"

            onclick="deleteUser(${index})">

            Delete

            </button>

        </div>
        `;

    });

}


document.getElementById("save")
.onclick = async()=>{

    const username =
    document.getElementById("username").value;

    const password =
    document.getElementById("password").value;

    const role =
    document.getElementById("role").value;

    if(!username || !password){

        alert("Fill all fields");

        return;

    }

    await DB.addUser({

        username,

        password,

        role

    });

    loadUsers();

};


async function deleteUser(index){

    const users = await DB.getUsers();

    users.splice(index,1);

    await DB.saveUsers(users);

    loadUsers();

}

loadUsers();
