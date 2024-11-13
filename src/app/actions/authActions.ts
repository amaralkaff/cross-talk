"use server";

import { signIn, signOut } from "@/src/auth";
import { prisma } from "@/src/lib/prisma";
import { LoginSchema, LoginSchemaType } from "@/src/lib/schemas/LoginSchema";
import { RegisterSchemaType, RegisterSchema } from "@/src/lib/schemas/RegisterSchema";
import { ActionResult } from "@/src/types"; 
import { User as PrismaUser } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "@/src/lib/errors"

export async function register(data: RegisterSchemaType): Promise<ActionResult<PrismaUser>> {
    try {
        const validated = RegisterSchema.safeParse(data);
        if (!validated.success) {
            return { status: "error", error: validated.error.issues };
        }

        const { name, email, password } = validated.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            return { status: "error", error: "User already exists" };
        }

        const user = await prisma.user.create({
            data: {
            name, 
            email, 
            password: hashedPassword 
        }
    });

    return { status: "success", data: user };
    } catch (error) {
        return { status: "error", error: "Something went wrong" };
    }
}