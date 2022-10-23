import { createRouter } from "./context";
import { z } from "zod";

export const categoriesRouter = createRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.category.findMany();
    },
  });
