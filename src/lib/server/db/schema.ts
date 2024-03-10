import { relations } from 'drizzle-orm';
import { pgTable, timestamp, varchar, boolean } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: varchar('id', { length: 100 }).unique().notNull(),
	isAdmin: boolean('is_admin').notNull(),
	// email: varchar('email', { length: 100 }).notNull().unique(),
	username: varchar('username', { length: 31 }).notNull().unique().primaryKey(),
	hashedPassword: varchar('hashed_password', { length: 100 }).notNull()
	// midtransId: varchar('midtrans_id', { length: 100 }).unique()
});

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session)
}));

export const session = pgTable('session', {
	id: varchar('id', { length: 100 }).primaryKey(),
	userId: varchar('user_id', { length: 100 }).notNull(),
	expiresAt: timestamp('expires_at').notNull()
});

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	})
}));
