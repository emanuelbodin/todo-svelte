import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import type { InferModel } from 'drizzle-orm';

export const todoSchema = sqliteTable('todos', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	title: text('title'),
	completed: integer(' completed', { mode: 'boolean' }),
});

type Todo = InferModel<typeof todoSchema, 'select'>;
