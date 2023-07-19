import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import db from '$lib/db';
import { todoSchema } from '$lib/db/schema';
export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title');
		if (!title) return fail(422, { title, error: 'Title is required' });
		await db.insert(todoSchema).values({ title: title.toString(), completed: false }).run();
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const idToDelete = parseInt(data.get('id') as string);
		await db.delete(todoSchema).where(eq(todoSchema.id, idToDelete)).run();
	},
};
