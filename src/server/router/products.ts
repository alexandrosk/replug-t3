import { createRouter } from "./context";
import { z } from "zod";

export const productsRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.product.findMany();
    },
  });
