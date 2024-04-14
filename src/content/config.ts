import { defineCollection, reference, z } from 'astro:content';

const work = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		subtitle: z.string(),
		description: z.string(),
		// Transform string to Date object
		release: z.coerce.date().optional(),
		priority: z.number(),
		cover: z.object({
			image: image().refine((image) => image.width >= 720, {
				message: "Cover image must be at least 720 pixels wide!",
			}),
			alt: z.string()
		}),
	}),
});

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		relatedWork: reference("work").optional(),
		cover: z.object({
			image: image().refine((image) => image.width >= 720, {
				message: "Cover image must be at least 720 pixels wide!",
			}),
			alt: z.string()
		}).optional(),
	}),
});

export const collections = { blog, work };
