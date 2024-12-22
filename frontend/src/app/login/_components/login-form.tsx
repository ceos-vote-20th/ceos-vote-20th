"use client"

import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Header from "@/components/header"
import { Button } from "@/components/button"

interface FormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function LoginForm() {
    const inputType = [
        {
            type: "text",
            name: "ID",
            placeholder: "Enter your ID",
        },
        {
            type: "password",
            name: "Password",
            placeholder: "Enter your password",
        },
    ];
    
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, reset, watch } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("Form submitted successfully:", data)
    }

    return (
        <div className="w-full h-full flex flex-col gap-40">
            {/* Header */}
            <Header title="Login" />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-20">
                <div className="space-y-4">
                    {inputType.map((input, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <label className="text-body1 text-grey450">{input.name}</label>
                            <input
                                {...register("password", { required: true })}
                                key={input.name}
                                type={input.type}
                                name={input.name}
                                placeholder={input.placeholder}
                                className="px-1 py-2 w-full border-b-2 border-grey550 bg-inherit focus:outline-none focus:ring-0 focus:border-white focus:placeholder-transparent"
                            />
                        </div>
                    ))}
                </div>
                <Button
                    type="submit"
                    variant={"primary"}
                    className="w-full p-2 text-white hover:bg-grey750"
                >
                    Sign up
                </Button>
            </form>
        </div>
    )
    }