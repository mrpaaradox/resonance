import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () => {
    // throw new Error("Something went wrong ");
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return {
      status: "ok",
      code: 124,
    };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
