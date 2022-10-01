import { pool } from "../db/index.js";
import { filtrar } from "../utils/filtrarResultados.js";

export const getDirecciones = async (req, res) => {
  const [result] = await pool.query(
    "SELECT dp.IDDireccion,dp.IDProveedor,d.Direccion,p.Proveedor,dp.Prioridad,p.Capacidad,d.Consumo FROM direcciones d, proveedores p, direccionproveedor dp WHERE d.ID = dp.IDDireccion AND p.ID = dp.IDProveedor AND p.Disponible = 1 ORDER BY d.ID,dp.Prioridad"
  );
  const resultado = filtrar(result);
  res.json(resultado);
};

export const getConsumo = async (req, res) => {
  const [result] = await pool.query(
    "SELECT SUM(Consumo) AS Consumo FROM direcciones;"
  );
  res.json(result);
};

export const getProveedores = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM proveedores");
  res.json(result);
};
