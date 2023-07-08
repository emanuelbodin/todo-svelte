import db from '$lib/db';
import { todoSchema } from '$lib/db/schema';

export async function load() {
	const todos = await db.select().from(todoSchema).all();
	return {
		todos,
	};
}
