import type { PageServerLoad } from './$types';
import {fail} from '@sveltejs/kit';
import { supabase } from '$lib/config/supabaseClient';
import {validateData } from '$lib/utils';
import { forgotPasswordSchema } from '$lib/schemas';
export const load: PageServerLoad = async () => {
    return {};
};
export const actions = {
	forgotPassword: async ({ cookies,request }) => {
		const {formData,errors}=await validateData(await request.formData(),forgotPasswordSchema);
        const email=formData.email;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
            try {
                const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                    redirectTo: 'http://localhost:5174/authentication/reset-password'
                });
                if (error) {
                    console.log('error',error.message);
					return{
						success:false,
						message:error.message,	
					}	
                } else {
                    console.log('success',data);
                    return{
                        success:true,	
                        message:`Check your ${email} for verification link!`,
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