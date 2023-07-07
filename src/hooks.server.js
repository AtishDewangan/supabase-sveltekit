import { supabase } from '$lib/config/supabaseClient';
export const handle=async({event,resolve})=>{
    const token=event.cookies.get('token')
    event.locals.token=token;
    
    // find the user based on the session
    const { data: { user } } = await supabase.auth.getUser(token)


    // if `user` exists set `events.local`
    if (user) {
        event.locals.user = {
        email: user.email,
        name: user.user_metadata.full_name,
        }
    }
  return await resolve(event)

}