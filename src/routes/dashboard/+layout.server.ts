import type { Actions, PageServerLoad } from './$types'
import {redirect} from '@sveltejs/kit';
export const load=async({locals})=>{
    if(!locals.token){
        throw redirect(303,'/authentication/signin')
    }
    return {
        user: locals.user,
      }
}
