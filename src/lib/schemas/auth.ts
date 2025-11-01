import { z } from "zod";

import { UserTypeEnum } from "@/lib/types/user";

//? === === === LOGIN === === === ?//
export const getLoginFormSchema = (t: (key: string) => string) => z.object({
  email: z
    .string()
    .trim()
    .min(1, t("emailRequired"))
    .min(10, t("emailMin"))
    .max(70, t("emailMax"))
    .email(t("emailInvalid"))
    .toLowerCase(),

  password: z
    .string()
    .trim()
    .min(1, t("passwordRequired"))
    .min(8, t("passwordMin"))
    .max(30, t("passwordMax")),
});

export const loginFormSchema = z.object({
  email: z.string(),
  password: z.string()
});


//? === === === SIGNIN === === === ?//
export const getSigninFormSchema = (t: (key: string) => string) => z.object({
  name: z
    .string()
    .trim()
    .min(1,t("nameRequired"))
    .max(70, t("nameMax")),

  email: z
    .string()
    .trim()
    .min(1, t("emailRequired"))
    .min(10, t("emailMin"))
    .max(70, t("emailMax"))
    .email(t("emailInvalid"))
    .toLowerCase(),

  password: z
    .string()
    .trim()
    .min(1, t("passwordRequired"))
    .min(8, t("passwordMin"))
    .max(30, t("passwordMax")),

  confirmPassword: z
    .string()
    .trim()
    .min(1, t("passwordRequired"))
    .min(8, t("passwordMin"))
    .max(30, t("passwordMax")),

  type: z.enum( Object.values(UserTypeEnum) ),
})
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: t("passwordMatch"),
  path: ["confirmPassword"]
});

export const signinFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  type: z.enum( Object.values(UserTypeEnum) )
})