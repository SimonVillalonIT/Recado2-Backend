import { Router } from "express";
import {
  getConsumo,
  getDireccion,
  getDirecciones,
  getProveedor,
  getProveedores,
  DeleteLinea,
  DeleteProveedor,
  postDirecciones,
  postProveedor,
  relacionarTablas,
  updateProveedor,
  changeProveedor,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.get("/direcciones", getDirecciones);

router.get("/direccion/:id", getDireccion);

router.get("/consumo", getConsumo);

router.get("/proveedores", getProveedores);

router.get("/proveedor/:id", getProveedor);

router.post("/proveedor", postProveedor);

router.delete("/proveedor/:id", DeleteProveedor);

router.post("/direcciones", postDirecciones);

router.post("/relaciones/:id", relacionarTablas);

router.delete("/borrarLinea/:id", DeleteLinea);

router.patch("/actualizarProveedor/:id", updateProveedor);

router.put("/changeProveedor/:id", changeProveedor);

export default router;
