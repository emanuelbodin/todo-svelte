import { eq } from 'drizzle-orm';
import db from '$lib/db';
import { todoSchema } from '$lib/db/schema';
export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		await db.insert(todoSchema).values({ title, completed: false }).run();
	},
	delete: async ({ request }) => {
		const data = await request.formData();
		const idToDelete = parseInt(data.get('id') as string);
		await db.delete(todoSchema).where(eq(todoSchema.id, idToDelete)).run();
	},
};
