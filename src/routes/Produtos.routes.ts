import { Router } from "express";
import {
  getProdutoById,
  getProdutos,
  saveProduto,
  updateProduto,
} from "../controller/ProdutosController";

const router = Router();

router.get("/produtos", getProdutos);
router.get("/produto/:id", getProdutoById);
router.post("/produto", saveProduto);
router.put("/produto/:id", updateProduto);

export default router;
