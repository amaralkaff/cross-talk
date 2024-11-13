"use client";

import { 
    Button, 
    Card, 
    CardBody, 
    CardHeader, 
    Input 
} from "@nextui-org/react";
import { GiPadlock } from "react-icons/gi";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginSchema, LoginSchemaType } from "@/src/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema),
        mode: "onChange" // Enable real-time validation
    });

    const onSubmit: SubmitHandler<LoginSchemaType> = (data) => {
        console.log("Form data:", data);
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <Card className="w-full max-w-lg shadow-xl">
                <CardHeader className="flex flex-col items-center gap-4 bg-white">
                    <GiPadlock className="text-5xl text-blue-600" />
                    <h1 className="text-4xl font-bold text-gray-800">CrossTalk</h1>
                </CardHeader>
                <CardBody className="p-10 bg-white">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <Input
                            {...register("email")}
                            type="email"
                            label="Email address"
                            placeholder="name@company.com"
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "bg-white text-gray-800",
                                inputWrapper: "border-2 border-gray-200 hover:border-blue-500 transition-colors"
                            }}
                        />
                        <Input
                            {...register("password")}
                            type="password"
                            label="Password"
                            placeholder="••••••••"
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "bg-white text-gray-800",
                                inputWrapper: "border-2 border-gray-200 hover:border-blue-500 transition-colors"
                            }}
                        />
                        <Button
                          type="submit"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg shadow-md transition-colors"
                          isDisabled={!isValid}
                        >
                          Log in
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
