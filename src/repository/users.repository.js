import UserDTO from '../dao/DTO/users.dto.js';


export default class UserRepository {

    constructor(dao) {
        this.dao = dao;
    }

    getById = async (uid) => {
        return this.dao.getById(uid);
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