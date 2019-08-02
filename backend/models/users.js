const db = require('./conn');

class User {
    constructor(user_id, first_name, last_name, email, password) {
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    async CheckIfDuplicate() {
        try {
            const response = await db.one(`
                SELECT email 
                FROM users 
                WHERE email = $1
            `, [this.email]);
            console.log("CheckIfDuplicate response:", response);
            return response;
        } catch (err) {
            console.log("CheckIfDuplicate() error:", err.message);
            return err.message;
        }
    }

    async save() {
        try {
            const response = await db.one(`
                insert into users 
                    (first_name, last_name, email, password)
                values
                    ($1, $2, $3, $4)
                returning user_id
                `, [this.first_name, this.last_name, this.email, this.password]);
            console.log('user was created with user_id:', response.user_id);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    async getUserByEmail() {
        try {
            const userData = await db.one(`
                SELECT user_id, first_name, last_name, password
                FROM users
                WHERE email = $1
                `, [this.email]);
            console.log('hash is: ', userData.password);
            return userData;
        } catch (err) {
            return err.message;
        }
    }

    async getUserById() {
        try {
            const userData = await db.one(`
                SELECT first_name, last_name, email, password
                FROM users
                WHERE user_id = $1
                `, [this.id]);
            console.log('hash is: ', userData.password);
            return userData;
        } catch (err) {
            return err.message;
        }
    }

    async deleteUserByEmail() {
        try {
            const deleteUser = await db.result(`
            delete 
            from users 
            where email = $1
            `, [this.email]);
            console.log('delete this:', deleteUser.email);
            return deleteUser;
        } catch (err) {
            return err.message;
        }
    }

    static async getMaxUserId() {
        try {
            const query = `SELECT max(user_id) FROM users`;
            const resp = await db.one(query);
            return resp.max;
        } catch (error) {
            console.log("getMaxUserId() error:", error.message);
            return error.message;
        }
    }
}

module.exports = User;