import { array, object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    firstName: string({ required_error: "First name is required" }),
    lastName: string({ required_error: "Last name is required" }),
    password: string({ required_error: "Password is required" }),
    // passwordConfirmation: string({
    //   required_error: "Password confirmation is required",
    // }),
    email: string({ required_error: "Email is required" }).email(
      "Not a valid email"
    ),
    country: string(),
    street: string(),
    city: string(),
    state: string(),
    zip: string(),
    groups: array(string())
  }),
  // .refine((data) => data.password === data.passwordConfirmation, {
  //   message: "Passwords do not match",
  //   path: ["passwordConfirmation"],
  // }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
