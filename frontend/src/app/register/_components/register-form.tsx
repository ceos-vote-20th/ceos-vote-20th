"use client"

import React, { useState } from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { useForm, SubmitHandler } from "react-hook-form"
import RegisterAlert from "./register-alert"
import Header from "@/components/header"
import { Button } from "@/components/button"
import { SelectBox } from "./select-box"

interface FormValues {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function RegisterForm() {
    const inputType = [
        {
            type: "text",
            name: "Name",
            placeholder: "Enter your name",
        },
        {
            type: "id",
            name: "ID",
            placeholder: "Enter your email",
        },
        {
            type: "password",
            name: "Password",
            placeholder: "Enter your password",
        },
        {
            type: "password",
            name: "Password Confirm",
            placeholder: "Confirm your password",
        },
        {
            type: "email",
            name: "Email",
            placeholder: "Enter your email",
        },
    ];
    const selectItemTeam = ["MUSAI", "CakeWay", "CoffeeDeal", "PhotoGround", "AngelBridge"];
    const selectItemPart = ["기획", "디자인", "프론트엔드", "백엔드"];
    const [error, setError] = useState<string | null>(null);
    const { register, handleSubmit, reset, watch } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        if (data.password !== data.confirmPassword) {
        // 비밀번호가 일치하지 않을 경우 오류 메시지를 표시
        setError("Passwords do not match!")
        return
        }

        // 오류가 없을 경우 API 호출 (추후 백엔드 연결)
        try {
        console.log("Form submitted successfully:", data)
        setError(null) // 오류 상태 초기화
        reset() // 폼 리셋
        } catch (err) {
        setError("An unexpected error occurred. Please try again.")
        }
    }

    return (
        <div className="w-full h-full flex flex-col gap-10">
            {/* Alert 컴포넌트 */}
            {/* {error && (
                <Alert variant="destructive" className="mb-4">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <RegisterAlert/> */}
            <Header title="Register" />
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {inputType.map((input, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <label className="text-body1 text-grey450">{input.name}</label>
                        <input
                            {...register("password", { required: true })}
                            key={input.name}
                            type={input.type}
                            name={input.name}
                            placeholder={input.placeholder}
                            className="px-1 py-2 w-full border-b-2 border-grey550 bg-inherit"
                        />
                    </div>
                ))}
                <div className="flex flex-col gap-2">
                    <label className="text-body1 text-grey450">Team / Part</label>
                    <div className="relative flex gap-10">
                        <SelectBox title={"Team"} placeholder={"Team"} items={selectItemTeam} />
                        <SelectBox title={"Part"} placeholder={"Part"} items={selectItemPart} />
                    </div>
                </div>
                <Button
                    type="submit"
                    variant={"primary"}
                    className="w-full p-2 text-white hover:bg-grey750"
                >
                Submit
                </Button>
            </form>
        </div>
    )
    }