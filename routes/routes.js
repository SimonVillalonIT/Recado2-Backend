import { Router } from "express";
import {
    getConsumo,
    getDireccion,
    getDirecciones,
    getProveedores,
    postDeleteLinea,
    postDeleteProveedor,
    postDirecciones,
    postProveedor,
    relacionarTablas,
    updateProveedor,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.get("/direcciones", getDirecciones);

router.get("/direccion/:id", getDireccion);

router.get("/consumo", getConsumo);

router.get("/proveedores", getProveedores);

router.post("/proveedor", postProveedor);

router.post("/proveedor/:id", postDeleteProveedor);

router.post("/borrarLinea/:id", postDeleteLinea);

router.post("/direcciones", postDirecciones);

router.post("/relaciones/:id", relacionarTablas)

router.post("/actualizarProveedor/:id", updateProveedor)
export default router;