import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            image: image().optional(),
            link: z.string(),
            type: z.enum(["client", "project"]),
            color: z.string().optional(),
        }),
});

export const collections = { projects };
