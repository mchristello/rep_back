import VentaDTO from '../dao/DTO/ventas.dto.js';

export default class VentaRepository {

    constructor(dao) {
        this.dao = dao;
    }

    getById = async (vid) => {
        return this.dao.getById(vid);
    }

    get = async (user) => {
        return this.dao.get(user);
    }

    create = async (data) => {
        const venta = new VentaDTO(data);
        return await this.dao.create(venta)
    }

    update = async (vid, data) => {
        return this.dao.update(vid, data);
    }

    delete = async (vid) => {
        return this.dao.delete(vid);
    }
}