
import { isAuthenticated } from '$lib/server/auth';

export async function load(locals) {
	const loggedIn = await isAuthenticated(locals.locals);
	return { loggedIn };
 };