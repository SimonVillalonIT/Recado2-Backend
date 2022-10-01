import { Router } from "express";
import {
  getConsumo,
  getDirecciones,
  getProveedores,
} from "../controllers/direcciones.controller.js";

const router = Router();

router.get("/direcciones", getDirecciones);

router.get("/consumo", getConsumo);

router.get("/proveedores", getProveedores);

export default router;
