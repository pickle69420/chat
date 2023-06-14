import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { session, supabase } = await parent();
	if (!session) {
		throw redirect(303, '/login');
	} else {
		const id = session.user.id;
		const { data, error } = await supabase.from('profiles').select('last_loc').eq('id', id).single();
		throw redirect(303, data['last_loc']);
	}
};