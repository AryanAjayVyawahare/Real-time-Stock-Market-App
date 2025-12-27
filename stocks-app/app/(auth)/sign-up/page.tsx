"use client"

import { Button } from "@/components/ui/button";
import { log } from "console";
import { useForm } from "react-hook-form"

const SignUp = () => {

   const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
       fullName: '',
      email: '',
      password: '',
      country: 'US',
      investmentGoals: 'Growth',
      riskTolerance: 'Medium',
      preferredIndustry: 'Technology',
    },
        mode: 'onBlur'
  },);
  const onSubmit= async (data:SignUpFormData) => {
  try{
  console.log("Sign-Up Data:", data);
  }catch(e){
    console.error("Sign-Up Error:", e);

  }
  return (
    <>
    <h1 className="form-title">Sign-Up & Personalize</h1>

        <form onSubmit={handleSubmit(onSubmit)}  className="space-y-5">
        <Button type="submit">
           
        </Button>
        </form>

    </>
  )
}  
}
 
export default SignUp;
