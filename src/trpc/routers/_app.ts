import { categriesRouter } from "@/modules/categoriess/server/procedure";
import { createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  categories: categriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
