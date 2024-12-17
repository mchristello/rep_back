import VentaModel from "./models/ventas.model.js";


export default class Ventas {

    getById = async (id) => {
        try {
            const venta = await VentaModel.findById(id);
            return venta;
        } catch (error) {
            console.log(`Error in GETBYID - ventas.mongo: ${error.message}`);
        }
    }

    get = async (user) => {
        try {
            const ventas = await VentaModel.find({ user: user._id }).lean().exec();
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

    update = async (vid, data) => {
        try {
            const updateEntry = await VentaModel.updateOne({ _id: vid }, data );
            
            const updated = await VentaModel.findById(vid);
            return updated;
        } catch (error) {
            console.log(`Error in UPDATE - ventas.mongo: ${error.message}`);
        }
    }

    delete = async (vid) => {
        try {
            const toDelete = await VentaModel.findById(vid);
            const deleteEntry = await VentaModel.deleteOne({ _id: vid });
            
            return toDelete;
        } catch (error) {
            console.log(`Error in DELETE - ventas.mongo: ${error.message}`);
        }
    }
}