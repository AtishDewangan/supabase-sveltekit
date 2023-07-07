import type { PageServerLoad } from './$types';
import {fail} from '@sveltejs/kit';
import { supabase } from '$lib/config/supabaseClient';
import {validateData } from '$lib/utils';
import { signupSchema } from '$lib/schemas';
export const load: PageServerLoad = async () => {
    return {};
};
export const actions = {
	signup: async ({ cookies,request }) => {
		const {formData,errors}=await validateData(await request.formData(),signupSchema)
		// const name:string = formData.name;
		// const email:string = formData.email;
		// const password:string = formData.password;
        const { name,email,password } = formData;
		if(errors){
			if(errors.fieldErrors!==null)
			return fail(400,{
				data:formData,
				errors:errors.fieldErrors
			});
		}else{
            try {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name:name
                        }
                    }
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