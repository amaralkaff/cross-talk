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
import { RegisterSchema, RegisterSchemaType } from "@/src/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { register } from "@/src/app/actions/authActions";

export default function RegisterForm() {
    const { 
        register: registerField, 
        handleSubmit, 
        setError, 
        formState: { errors, isValid, isSubmitting } 
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        mode: "onTouched"
    });

    const onSubmit = async (data: RegisterSchemaType) => {
        const result = await register(data);

        if (result.status === "success") {
            console.log("User registered successfully:", result.data);
        } else {
            if (Array.isArray(result.error)) {
                result.error.forEach((e: any) => {
                    const fieldName = e.path.join(".") as 
                    | "email"
                    | "name"
                    | "password";

                    setError(fieldName, {
                        message: e.message
                    });
                });
            } else {
                setError("root.serverError", {message: result.error});
            }
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
            <Card className="w-full max-w-lg shadow-2xl">
                <CardHeader className="flex flex-col items-center gap-4 bg-white p-8 rounded-t-xl">
                    <div className="p-4 bg-blue-100 rounded-full">
                        <GiPadlock className="text-5xl text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800">CrossTalk</h1>
                </CardHeader>
                <CardBody className="p-10 bg-white rounded-b-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <Input
                            {...registerField("name")}
                            type="text" 
                            label="Full Name"
                            placeholder="John Doe"
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message as string}
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "bg-white text-gray-800",
                                inputWrapper: "border-2 border-gray-200 hover:border-blue-500 focus:border-blue-600 transition-colors"
                            }}
                        />
                        <Input
                            {...registerField("email")}
                            type="email"
                            label="Email address"
                            placeholder="name@company.com"
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "bg-white text-gray-800",
                                inputWrapper: "border-2 border-gray-200 hover:border-blue-500 focus:border-blue-600 transition-colors"
                            }}
                        />
                        <Input
                            {...registerField("password")}
                            type="password"
                            label="Password"
                            placeholder="••••••••"
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                            classNames={{
                                label: "text-gray-700 font-medium",
                                input: "bg-white text-gray-800",
                                inputWrapper: "border-2 border-gray-200 hover:border-blue-500 focus:border-blue-600 transition-colors"
                            }}
                        />
                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg shadow-lg transition-all hover:shadow-xl rounded-xl"
                            isDisabled={!isValid || isSubmitting}
                            isLoading={isSubmitting}
                        >
                            Register
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}
