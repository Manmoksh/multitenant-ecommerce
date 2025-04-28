import { createTRPCRouter } from "../init";
import { tagsRouter } from "@/modules/tags/server/procedure";
import { authRouter } from "@/modules/auth/server/procedure";
import { productsRouter } from "@/modules/products/server/procedure";
import { categriesRouter } from "@/modules/categoriess/server/procedure";
export const appRouter = createTRPCRouter({
  auth: authRouter,
  tag: tagsRouter,
  products: productsRouter,
  categories: categriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
