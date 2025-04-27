import { categriesRouter } from "@/modules/categoriess/server/procedure";
import { createTRPCRouter } from "../init";
import { authRouter } from "@/modules/auth/server/procedure";
import { productsRouter } from "@/modules/products/server/procedure";
export const appRouter = createTRPCRouter({
  categories: categriesRouter,
  auth: authRouter,
  products: productsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
