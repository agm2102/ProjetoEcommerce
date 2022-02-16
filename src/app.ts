import * as express from "express";
import clientesRoutes from "./routes/Clientes.routes";
import categoriasRoutes from "./routes/Categorias.routes";
import produtosRoutes from "./routes/Produtos.routes";
import pedidosRoutes from "./routes/Pedidos.routes";

const app = express();
app.use(express.json());
app.use(clientesRoutes, categoriasRoutes, produtosRoutes, pedidosRoutes);

export default app;
