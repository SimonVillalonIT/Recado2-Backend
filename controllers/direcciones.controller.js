import { pool } from "../db/index.js";
import { filtrar } from "../utils/filtrarResultados.js";

export const getDirecciones = async(req, res) => {
    const [result] = await pool.query(
        "SELECT dp.IDDireccion,dp.IDProveedor,d.Direccion,p.Proveedor,dp.Prioridad,p.Capacidad,d.Consumo FROM direcciones d, proveedores p, direccionproveedor dp WHERE d.ID = dp.IDDireccion AND p.ID = dp.IDProveedor AND p.Disponible = 1 ORDER BY d.ID,dp.Prioridad"
    );
    const resultado = filtrar(result);
    res.json(resultado);
};
export const getDireccion = async(req, res) => {
    let id = req.params.id

    const [result] = await pool.query(
        `SELECT * FROM direcciones WHERE ID = ${id}`
    );
    res.json(result);
};

export const getConsumo = async(req, res) => {
    const [result] = await pool.query(
        "SELECT SUM(Consumo) AS Consumo FROM direcciones;"
    );
    res.json(result);
};

export const getProveedores = async(req, res) => {
    const [result] = await pool.query("SELECT * FROM proveedores");
    res.json(result);
};

export const postDirecciones = async(req, res) => {
    const { Direccion, Consumo } = req.body;
    const [result] = await pool.query(
        "INSERT INTO direcciones(Direccion,Consumo) VALUES (?,?) ", [Direccion, Consumo]
    );
    res.json({
        id: result.insertId,
    });
};

export const relacionarTablas = async(req, res) => {
    let id = req.params.id;
    let proveedores = req.body;

    proveedores.map(async(proveedor, i) => {
        await pool.query(
            "INSERT INTO direccionproveedor(IDDireccion, IDProveedor, Prioridad) VALUES (?,?,?) ", [id, proveedor.value, i]
        );
    });

    res.send({ success: "true" });
};

export const postProveedor = async(req, res) => {
    const { Proveedor, Capacidad } = req.body
    try {

        await pool.query(
            "INSERT INTO proveedores(Proveedor,Capacidad,Disponible) VALUES (?,?,?)", [Proveedor, Capacidad, 1]
        )
    } catch (error) {
        console.log(error)
    }
    res.status(200).send("Proveedor agregado con exito")

}


export const postDeleteProveedor = async(req, res) => {
    const { id } = req.params
    try {

        await pool.query(
            "DELETE FROM proveedores WHERE ID = ?", [id]
        )
    } catch (error) {
        console.log(error)
    }
    res.status(200).send("Proveedor eliminado con exito")

}

export const postDeleteLinea = async(req, res) => {
    const { id } = req.params
    try {
        await pool.query(
            "DELETE FROM direcciones WHERE ID = ?", [id]
        )
    } catch (error) {
        console.log(error)
    }
    res.status(200).send("Linea eliminada con exito")
}


export const updateProveedor = async(req, res) => {
    const { id } = req.params
    try {
        await pool.query(
            `UPDATE proveedores SET Disponible = IF(Disponible = 1, 0, 1) WHERE id = ${id}`)
        res.status(200).send("Actualizado con exito")
    } catch (error) {
        console.log(error)
    }
}