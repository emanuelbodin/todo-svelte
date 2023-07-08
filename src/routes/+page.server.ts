import db from '$lib/db';
import { todoSchema } from '$lib/db/schema';
export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		await db.insert(todoSchema).values({ title, completed: false }).run();
	},
};
