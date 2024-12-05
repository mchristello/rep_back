import { VentasService } from '../repository/index.js';

export const get = async (req, res) => {
    try {
        const user = req.session.user;

        const ventas = await VentasService.get(user);

        const result = ventas.length > 0 ? ventas : `Este usuario no registra ventas para mostrar.`

        return res.status(200).send({ 
            status: 'success',
            message: `Ventas de ${user.first_name}`,
            payload: result
        })
    } catch (error) {
        console.log(`Error in expenses.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const getById = async (req, res) => {
    try {
        const vid = req.params?.vid || req.body.vid;

        if(!vid) {
            return res.status(400).send({ status: 'error', message: `Se debe proveer un ID`})
        }

        const result = await VentasService.getById(vid);

        return res.status(200).send({ 
            status: 'success',
            message: `Resultado de busqueda`,
            payload: result
        }); 
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const user = req.session.user
        // console.log({user});

        const data = req.body

        data.user = user._id

        // console.log(data.items);

        const venta = await VentasService.create(data)

        return res.status(200).send({ 
            status: 'success', 
            message: `Nuevo registro de venta creado`, 
            payload: venta 
        });

    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const update = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const deleteSale = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}