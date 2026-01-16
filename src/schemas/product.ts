import * as v from 'valibot';

export const MediaSchema = v.object({
  type: v.picklist(['image', 'video']),
  src: v.string(),
  alt: v.optional(v.string()),
});

export const ProductSchema = v.object({
  id: v.string(),
  title: v.string(),
  description: v.string(),
  price: v.number(),
  status: v.picklist(['available', 'reserved', 'sold']),
  media: v.pipe(v.array(MediaSchema), v.minLength(1, 'Product must have at least one media item')),
});

export type Media = v.InferOutput<typeof MediaSchema>;
export type Product = v.InferOutput<typeof ProductSchema>;
