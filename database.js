const DB = {

    async getUsers() {

        const data = await chrome.storage.local.get("users");

        return data.users || [];

    },

    async saveUsers(users) {

        await chrome.storage.local.set({

            users: users

        });

    },

    async addUser(user) {

        const users = await this.getUsers();

        users.push(user);

        await this.saveUsers(users);

    }

};
