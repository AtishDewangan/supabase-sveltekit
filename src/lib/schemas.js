import {z} from 'zod';

export const signinSchema=z.object({
email:z.string({required_error:'Email is required'}).email({message:'Email must be a valid email'}),
password:z.string({required_error:'Password is required'}).min(2,{message:'Password is required'})
});


export const signupSchema=z.object({
    name:z.string({required_error:'Name is required'}).regex(/^[a-zA-Z\s]*$/,{message:'Name can only contain letters and spaces.'}).min(2,{message:'Name is required'}).max(64,{message:'Name must be less than 64 characters'}),
    email:z.string({required_error:'Email is required'}).email({message:'Email must be a valid email'}),
    password:z.string({required_error:'Password is required'})
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message:'Password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'}),
    cpassword:z.string({required_error:'Confirm password is required'})
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message:'Confirm password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'})
}).superRefine(({cpassword,password},ctx)=>{
    if(cpassword!==password){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:'Password & Confirm password must match',
            path:['cPassword']
        })
    }
    if(cpassword!==password){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:'Password & Confirm password must match',
            path:['password']
        })
    }
})

export const forgotPasswordSchema=z.object({
email:z.string({required_error:'Email is required'}).email({message:'Email must be a valid email'}),
});
export const resetPasswordSchema=z.object({
    password:z.string({required_error:'Password is required'})
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message:'Password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'}),
    cpassword:z.string({required_error:'Confirm password is required'})
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,{message:'Confirm password Must be atleast 1 uppercase, 1 lowercase & 1 numeric letter'})
}).superRefine(({cpassword,password},ctx)=>{
    if(cpassword!==password){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:'Password & Confirm password must match',
            path:['cPassword']
        })
    }
    if(cpassword!==password){
        ctx.addIssue({
            code:z.ZodIssueCode.custom,
            message:'Password & Confirm password must match',
            path:['password']
        })
    }
})

    