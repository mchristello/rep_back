import VentaModel from "./models/ventas.model";


export default class Ventas {

    getById = async (id) => {
        try {
            const venta = await VentaModel.findById(id);
            return venta;
        } catch (error) {
            console.log(`Error in GETBYID - ventas.mongo: ${error.message}`);
        }
    }

    get = async () => {
        try {
            const ventas = await VentaModel.findById().lean().exec();
            return ventas;
        } catch (error) {
            console.log(`Error in GET - ventas.mongo: ${error.message}`);
        }
    }

    create = async (ventaFromDTO) => {
        try {
            console.log({ventaFromDTO});
            const nuevaVenta = await VentaModel.create(ventaFromDTO);
            nuevaVenta.save();
            return true;

        } catch (error) {
            console.log(`Error in CREATE - ventas.mongo: ${error.message}`);
        }
    }

    update = async (rid, data) => {
        try {
            const updateEntry = await VentaModel.update({ _id: rid}, data);
            return true;
        } catch (error) {
            console.log(`Error in UPDATE - ventas.mongo: ${error.message}`);
        }
    }

    delete = async (rid) => {
        try {
            const deleteEntry = await VentaModel.delete({ _id: rid });
            return true;
        } catch (error) {
            console.log(`Error in DELETE - ventas.mongo: ${error.message}`);
        }
    }
}