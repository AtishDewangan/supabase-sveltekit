import type { PageServerLoad } from './$types';
import {fail} from '@sveltejs/kit';
import { supabase } from '$lib/config/supabaseClient';
import {validateData } from '$lib/utils';
import { resetPasswordSchema } from '$lib/schemas';
export const load: PageServerLoad = async () => {
    return {};
};
export const actions = {
	resetPassword: async ({ cookies,request }) => {
		const {formData,errors}=await validateData(await request.formData(),resetPasswordSchema)
		const password:string = formData.password;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
            try {
                const { data, error } = await supabase.auth.updateUser({
                    password: password
                });
                if (error) {
                    console.log('error',error.message);
					return{
						success:false,
						message:error.message,	
					}	
                } else {
                    console.log('success');
                    return{
						success:true,	
                        message:`Password has been updated successfully!!`,
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