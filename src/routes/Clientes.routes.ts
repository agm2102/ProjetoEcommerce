import { Router } from "express";
import {
  getClienteById,
  getClientes,
  saveClientes,
  updateCliente,
} from "../controller/ClienteController";

const routes = Router();

routes.get("/clientes", getClientes);
routes.post("/clientes", saveClientes);
routes.get("/cliente/:id", getClienteById);
routes.put("/cliente/:id", updateCliente);

export default routes;
