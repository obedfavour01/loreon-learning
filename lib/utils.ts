import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import {z} from "zod"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formSchema = z.object({
  firstName: z.string().min(2).max(50,"username must be less than 50  characters"),  
  lastName : z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string(),
  country: z.string().min(2),
  city: z.string().min(2),
  loreon: z.string(),
  track: z.string(),
  amount: z.string(),
  cardName : z.string().min(2),
  cardNumber: z.string(),
  date: z.string(),
  cvv: z.number(),
  terms: z.boolean()
              
})


export const SignUpFormSchema = z.object({
  fullName: z.string().min(2).max(50,"username must be less than 50  characters"),  
  email: z.string().email(),
  phoneNumber: z.string().transform(data => Number(data)),
  password: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(8),
  confirm: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).min(8),
  terms: z.boolean()
              
}).refine((data) => data.password === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
})