function parseFecha(fecha) {
    if (!fecha) return null;
    const [dia, mes, año] = fecha.split('/');
    return new Date(`${año}-${mes}-${dia}`);
}



export default class VentaDTO {
    constructor(venta) {
        console.log({venta});
        this.fecha = parseFecha(venta.fecha) || new Date().toLocaleString();
        this.numeroSiniestro = venta.numeroSiniestro || 0;
        this.porcentajeAporte = venta.porcentajeAporte || 50;
        this.vehiculo = venta.vehiculo || '';
        this.patente = venta.patente || '';
        this.items = Array.isArray(venta.items) 
            ? venta.items.map(item => ({
                repuesto: item.repuesto || '',
                precioClaims: item.precioClaims || 0,
                iva: item.iva || 0,
                importeFacturar: item.importeFacturar || 0,
                costo: item.costo || 0,
                flete: item.flete || 0,
                ganancia: item.ganancia || 0
            }))
            : [];
        this.gananciaTotal = venta.gananciaTotal || 0;
        this.gananciaMati = venta.gananciaMati || 0;
        this.gananciaAxel = venta.gananciaAxel || 0;
        this.fechaPago = parseFecha(venta.fechaPago) || null;
        this.user = venta.user || null;
    }
}