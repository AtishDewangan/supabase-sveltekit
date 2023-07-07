import type { Actions, PageServerLoad } from './$types'
import {redirect} from '@sveltejs/kit';
export const load:PageServerLoad=async({locals})=>{
    if(!locals.token){
        throw redirect(303,'/authentication/signin')
    }
    return {
        user: locals.user,
      }
}
