import { resend } from "@/lib/reSend";

import VerificationEmail from "../../emails/VerficationEmail";

import { ApiResponse } from "./types/ApiResponse";


export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystery Feedback | Verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {success:true,message:"Verificatoin email send successfully"}
    } catch (emailError) {
        console.log("Error sending verification Email",emailError);
        return {success:false,message:'Failed to send Verificatoin Email'}
    }
}
