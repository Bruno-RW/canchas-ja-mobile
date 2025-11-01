"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useSession from "@/hooks/useSession";
import useToastStyle from "@/hooks/useToastStyle";
import { cn, getInitials } from "@/lib/utils/utils";
import { SIGNIN_API_URL } from "@/lib/routes/backend";
import { siginFormData } from "@/lib/types/forms";
import { getSigninFormSchema } from "@/lib/schemas/auth";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/custom/Button";

const SigninForm = () => {
  const toastText = useTranslations("Global.Toast");
  const formText = useTranslations("Page.SignIn.SigninForm");
  const schemaText = useTranslations("Page.SignIn.SigninFormSchema");

  const { login } = useSession();
  const router = useRouter();
  const { toastStyle } = useToastStyle();
  const [ isLoading, setIsLoading ] = useState(false);

  const submitLabel  = (isLoading ? formText("SigningIn") : formText("Signin"));

  const signinFormSchema = getSigninFormSchema(schemaText);
  const form = useForm<siginFormData>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: siginFormData) => {
    let toastMessage = "";
    let isError = false;

    try {
      setIsLoading(true);

      const signinPost = await axios.post(
        SIGNIN_API_URL,
        { 
          name: data.name,
          email: data.email, 
          type: "C",
          password: data.password, 
          confirmPassword: data.confirmPassword
        },
        { timeout: 5000 } // 5 seconds timeout
      );

      if (!signinPost) {
        toastMessage= toastText("SendError");
        isError = true;
        return;
      }

      if (signinPost.status !== 200) {
        toastMessage = `${toastText("RequestError")}: ${signinPost.statusText}`;
        isError = true;
        return;
      }

      const siginData = signinPost.data;

      login({
        id: siginData.id,
        name: siginData.name,
        email: siginData.email,
        type: siginData.type,
        initials: getInitials(siginData.name),
        isLogin: true,
      });
      
      router.replace("/");

    } catch (error) {
      toastMessage = `${toastText("InternalError")}: ${error}`;
      isError = true;
      
    } finally {
      setIsLoading(false);
      if (isError) toast.error(toastMessage, toastStyle)
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col w-full gap-y-5 py-3" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="name"
                    autoComplete="name"
                    placeholder={formText("Name")}
                    autoFocus
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.name?.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="email"
                    autoComplete="email"
                    placeholder={formText("Email")}
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.email?.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="password"
                    autoComplete="password"
                    placeholder={formText("Password")}
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.password?.message} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    className="self-center"
                    type="password"
                    autoComplete="password"
                    placeholder={formText("ConfirmPassword")}
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.confirmPassword?.message} />
              </FormItem>
            )}
          />
      </div>

        <Button className={cn(isLoading && "bg-blue-600/70 dark:bg-blue-500/40")}
          type="submit"
          variant="blue"
          isLoading={isLoading}
        >
          {submitLabel}
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;