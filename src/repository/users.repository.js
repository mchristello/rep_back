import UserDTO from '../dao/DTO/users.dto.js';


export default class UserRepository {

    constructor(dao) {
        this.dao = dao;
    }

    findByEmail = async (email) => {
        return this.dao.findByEmail(email);
    }

    get = async () => {
        return this.dao.get();
    }

    create = async (data) => {
        const user = new UserDTO(data);
        return await this.dao.create(user)
    }

    update = async (uid, data) => {
        return this.dao.update(uid, data);
    }

    delete = async (uid) => {
        return this.dao.delete(uid);
    }
}