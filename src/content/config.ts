import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            image: image(),
            link: z.string(),
            type: z.enum(["client", "project"]),
            color: z.string(),
            showImage: z.boolean(),
            year: z.number().optional(),
        }),
});

export const collections = { projects };
