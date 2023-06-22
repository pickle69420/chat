import { redirect } from '@sveltejs/kit';

export const load = async ({ parent }) => {
	const { session, supabase } = await parent();
	const { data, error } = await supabase.from('profiles').select('last_loc').eq('id', id).single();
};