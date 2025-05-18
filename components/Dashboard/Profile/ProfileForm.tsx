"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { SignUpFormSchema } from "@/lib/utils";

import { z } from "zod"


import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link";
import InputPassword from "@/components/ui/InputPassword";

const ProfileForm = () => {

    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: 234,
            password: "",
            confirm: "",
            terms: false
        }
    })

    const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {
        console.log(values);
    }
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-7 lg:w-[60%]">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem className="w-full xs:max-lg:w-full">
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <div className="flex gap-6 ">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full xs:max-lg:w-full">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type={"email"} placeholder="Your First Name" className="bg-gray-100" {...field} />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="w-full xs:max-lg:w-full">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type={"tel"} placeholder="Your First Name" className="bg-gray-100" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>



                    <div className="flex gap-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full xs:max-lg:w-full">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input type={"email"} 
                                            placeholder="Your First Name" 
                                            className="bg-gray-100" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage></FormMessage>
                                </FormItem>
                            )}
                        />


                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="w-full xs:max-lg:w-full">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input type={"tel"} 
                                            placeholder="Your First Name" 
                                            className="bg-gray-100" 
                                            {...field} 
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    <h3 className="text-[#475467]">Deactivate Account</h3>

                    <h3 className="text-[#F81404]">Delete Account</h3>
                </form>
            </Form>
        </div>

    )
}

export default ProfileForm