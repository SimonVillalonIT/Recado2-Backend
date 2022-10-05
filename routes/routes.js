import { Router } from "express";
import {
    getConsumo,
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

router.get("/direccion/:id", getDirecciones);

router.get("/consumo", getConsumo);

router.get("/proveedores", getProveedores);

router.post("/proveedor", postProveedor);

router.post("/proveedor/:id", postDeleteProveedor);

router.post("/borrarLinea/:id", postDeleteLinea);

router.post("/direcciones", postDirecciones);

router.post("/relaciones/:id", relacionarTablas)

router.post("/actualizarProveedor", updateProveedor)
export default router;