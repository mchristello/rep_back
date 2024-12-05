import config from "../config/config.js";
import { connectMongo } from "../utils/mongo.js";

export let Venta 
export let User

switch(config.PERSISTENCE) {
    case 'FILE':
        console.log(`Establishing connection with FileSystem...`);

        const { default: Ventafile } = await import('./file/venta.file.js')
        const { default: Userfile } = await import('./file/users.file.js')

        Venta = Ventafile
        User = Userfile

        console.log(`Connected to local FileSystem....`);

        break;

    default: // default: 'MONGO'
        console.log(`Establishing connection to MongoDB...`);
        
        connectMongo()

        console.log(`Connection to DB approved from Factory!`);

        const { default: VentaMongo } = await import('./mongo/ventas.mongo.js')
        const { default: UserMongo } = await import('./mongo/users.mongo.js')

        Venta = VentaMongo
        User = UserMongo

        break;
}