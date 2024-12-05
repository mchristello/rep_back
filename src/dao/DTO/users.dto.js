

export default class UserDTO {
    constructor(user) {
        this.name = user.name;
        this.lastname = user.lastname;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }
}