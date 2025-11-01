import { z } from "zod";

import { loginFormSchema, signinFormSchema } from "@/lib/schemas/auth";

export type loginFormData = z.infer<typeof loginFormSchema>;
export type siginFormData = z.infer<typeof signinFormSchema>;