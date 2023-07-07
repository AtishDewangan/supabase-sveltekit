import type { PageServerLoad } from './$types';
import {fail} from '@sveltejs/kit';
import { supabase } from '$lib/config/supabaseClient';
import {validateData } from '$lib/utils';
import { signinSchema } from '$lib/schemas';
export const load: PageServerLoad = async () => {
    return {};
};
export const actions = {
	signin: async ({ cookies,request }) => {
		const {formData,errors}=await validateData(await request.formData(),signinSchema)
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
            try {
                const { data, error } = await supabase.auth.signInWithPassword(formData);
                if (error) {
                    console.log('error atish:',error.message);
					return{
						success:false,
						message:error.message,	
					}	
                } else {
                    cookies.set('token',data.session.access_token,{
						path:'/',
						httpOnly:true,
						sameSite:'strict',
						secure: process.env.NODE_ENV === 'production',
						maxAge:60*60*24*30,
					})
					// console.log('succcess',data.session.access_token)
					return{
						success:true,
                        message:`Welcomes ${formData.email}`,		
					}
                }
            } catch (error) {
                console.log('catch error')
				return{
					success:false,
					message:'Invalid credentials'
				}
            }
		}
	}
};