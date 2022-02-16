import { Router } from "express";
import {
  getCategoriaById,
  getCategorias,
  saveCategoria,
  updateCategoria,
} from "../controller/CategoriasController";

const routes = Router();

routes.get("/categorias", getCategorias);
routes.get("/categoria/:id", getCategoriaById);
routes.post("/categorias", saveCategoria);
routes.put("/categoria/:id", updateCategoria);

export default routes;
