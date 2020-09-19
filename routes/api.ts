import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./../controllers/products.ts";
import {
  getBukus,
} from "./../controllers/bukus.ts";

const router = new Router();

router.get("/api/v1/products", getProducts)
  .get("/api/v1/products/:id", getProduct)
  .post("/api/v1/products", addProduct)
  .put("/api/v1/product/:id", updateProduct)
  .delete("/api/v1/product/:id", deleteProduct);


router.get("/api/v1/buku", getBukus);

export default router;