import { Venta, User } from '../dao/factory.js';

// Import repositories
import VentaRepository from '../repository/ventas.repository.js';
import UserRepository from '../repository/users.repository.js';

// Export service to use in Controllers
export const VentasService = new VentaRepository(new Venta())
export const UserService = new UserRepository(new User())