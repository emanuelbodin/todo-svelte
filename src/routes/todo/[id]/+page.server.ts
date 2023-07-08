import { error } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { todoSchema } from '$lib/db/schema.js';
import db from '$lib/db';
export async function load({ params }) {
	const todo = await db
		.select()
		.from(todoSchema)
		.where(eq(todoSchema.id, parseInt(params.id)))
		.get();
	if (!todo) throw error(404);
	return { todo };
}
