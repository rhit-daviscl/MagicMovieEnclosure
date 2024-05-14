import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAllMovies: publicProcedure.query(async ({ ctx }) => {
    return  await ctx.db.movieMusicHome.findMany({
      where: {
        type: 0,
      }
    });
  }),
  getAllMusic: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.movieMusicHome.findMany({
      where: {
        type: 1,
      }
    });
  }),
});
