import mongoose from "mongoose";


const ventaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true,
    },
    numeroSiniestro: {
        type: Number,
        required: true
    },
    porcentajeAporte: {
        type: Number,
        required: true
    },
    vehiculo: {
        type: String,
        required: true
    },
    patente: {
        type: String,
        required: true
    },
    repuesto: {
        type: String,
        required: true
    },
    precioClaims: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        required: true
    },
    importeFactura: {
        type: Number,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    flete: {
        type: Number,
        required: true
    },
    ganancia: {
        type: Number,
        required: true
    },
    gananciaTotal: {
        type: Number,
        required: true
    },
    dineroMati: {
        type: Number,
        required: true
    },
    dineroAxel: {
        type: Number,
        required: true
    },
    fechaPago: {
        type: Date,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true // Agrega automáticamente createdAt y updatedAt
});

ventaSchema.pre('findOne', function () {
    this.populate('user')
})

const VentaModel = mongoose.model('ventas', ventaSchema);

export default VentaModel;