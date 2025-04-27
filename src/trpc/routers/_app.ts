import { categriesRouter } from "@/modules/categoriess/server/procedure";
import { createTRPCRouter } from "../init";
import { authRouter } from "@/modules/auth/server/procedure";
export const appRouter = createTRPCRouter({
  categories: categriesRouter,
  auth: authRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
