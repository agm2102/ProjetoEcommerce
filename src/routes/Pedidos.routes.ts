import { Router } from "express";
import {
  getPedidoById,
  getPedidos,
  savePedidos,
  updatePedido,
} from "../controller/PedidosController";

const router = Router();

router.get("/pedidos", getPedidos);
router.get("/pedido/:id", getPedidoById);
router.post("/pedido", savePedidos);
router.put("/pedido/:id", updatePedido);

export default router;
