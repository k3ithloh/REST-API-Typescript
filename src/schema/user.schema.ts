// This schema is used to validate all user endpoints
import Password from "antd/lib/input/Password"
import { object, string, TypeOf } from "zod"
import { createUser } from "../service/user.service";


export const createUserSchema = object({
body: object({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Password is required"
        }).min(6, "Password must be at least 6 characters long"),

        passwordConfirmation: string({
            required_error: "Password confirmation is required"
        }),
        email: string({
            required_error: "Email is required",
        }).email("Must be a valid email")
    
    // This is a custom validation using zod that checks if the password and passwordConfirmation are the same
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    })
});


export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>,"body.passwordConfirmation">;

