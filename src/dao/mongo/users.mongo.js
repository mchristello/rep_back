import UserModel from "./models/users.model.js";


export default class Users {

    findByEmail = async (email) => {
        try {
            const user = await UserModel.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(`Error in FINDBYEMAIL - users.mongo: ${error.message}`);
        }
    }

    get = async () => {
        try {
            const users = await UserModel.find().lean().exec();
            return users;
        } catch (error) {
            console.log(`Error in GET - users.mongo: ${error.message}`);
        }
    }

    create = async (repuestoFromDTO) => {
        try {
            const newUser = await UserModel.create(repuestoFromDTO);
            return newUser;

        } catch (error) {
            console.log(`Error in CREATE - users.mongo: ${error.message}`);
        }
    }

    update = async (rid, data) => {
        try {
            const updateEntry = await UserModel.update({ _id: rid}, data);
            return true;
        } catch (error) {
            console.log(`Error in UPDATE - users.mongo: ${error.message}`);
        }
    }

    delete = async (rid) => {
        try {
            const deleteEntry = await UserModel.delete({ _id: rid });
            return true;
        } catch (error) {
            console.log(`Error in DELETE - users.mongo: ${error.message}`);
        }
    }
}