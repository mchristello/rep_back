
export default class VentaDTO {
    constructor(venta) {
        this.date = venta.date || new Date().toLocaleString();
        this.numeroSiniestro = venta.numeroSiniestro || 0;
        this.porcentajeAporte = venta.porcentajeAporte || 50;
        this.vehiculo = venta.vehiculo || '';
        this.patente = venta.patente || '';
        this.venta = venta.venta || '';
        this.precioClaims = venta.precioClaims || 0;
        this.iva = this.precioClaims * 0.21;
        this.importeFactura = this.precioClaims + this.iva;
        this.costo = venta.costo || 0;
        this.flete = venta.flete || 0;
        this.ganancia = venta.ganancia || 0;
        this.gananciaTotal = venta.gananciaTotal || 0;
        this.gananciaMati = venta.gananciaMati || 0;
        this.gananciaAxel = venta.gananciaAxel || 0;
        this.fechaPago = venta.fechaPago || null;
        this.createdBy = venta.createdBy || null;
    }
}