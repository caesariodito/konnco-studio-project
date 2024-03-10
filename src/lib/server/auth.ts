import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { redirect } from '@sveltejs/kit';
import { Lucia } from 'lucia';
import { db } from './db';
import { session, user } from './db/schema';

const adapter = new DrizzlePostgreSQLAdapter(db, session, user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (data) => {
		return {
			username: data.username,
			isAdmin: data.isAdmin
			// midtransId: data.midtransId
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			username: string;
			isAdmin: boolean;
		};
	}
}

export function ensureAdmin(locals: App.Locals) {
	if (!locals.user || !locals.session) {
		redirect(303, '/auth/login');
	}

	if (!locals.user.isAdmin) {
		redirect(303, '/');
	}
}
