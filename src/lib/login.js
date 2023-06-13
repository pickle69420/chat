import { supabase } from './supa';

/*export async function signInWithUsername(username, password) {
    // Query the profile table to find the user_id for the given username
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('id')
      .eq('username', username)
      .single()
  
    // If there is an error or no profile found, return an error
    if (profileError || !profile) {
      return { data: null, error: profileError || 'name_not_found' }
    }
  
    // Query the auth.users table to find the email for the given user_id
    const { data: user, error: userError } = await supabase.rpc(
      "get_user_email_by_id",
      {
        user_id: profile.id,
      }
    );
    console.log(user);
  
    // If there is an error or no user found, return an error
    if (userError || !user) {
      return { data: null, error: userError || 'user_not_found' }
    }
  
    // Call the signInWithPassword() method with the email and password
    const { data: session, error: sessionError } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: password,
    })
  
    // Return the session data or error
    return { data: session, error: sessionError }
}*/

export async function signInWithUsername(username, password) {
  // Query the profile table to find the user_id for the given username
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('email')
    .eq('username', username)
    .single()

  console.log(profile.email);

  

  // If there is an error or no profile found, return an error
  if (profileError || !profile) {
    return { data: null, error: profileError || 'name_not_found' }
  }

  // Call the signInWithPassword() method with the email and password
  const { data: session, error: sessionError } = await supabase.auth.signInWithPassword({
    email: profile.email,
    password: password,
  })
  

  // Return the session data or error
  return { data: session, error: sessionError }
}