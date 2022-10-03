import { Router } from "express";
import {
  getConsumo,
  getDirecciones,
  getProveedores,
  postDirecciones,
  relacionarTablas,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.get("/direcciones", getDirecciones);

router.get("/direccion/:id", getDirecciones);

router.get("/consumo", getConsumo);

router.get("/proveedores", getProveedores);

router.post("/direcciones", postDirecciones);

router.post("/relaciones/:id", relacionarTablas)
export default router;
