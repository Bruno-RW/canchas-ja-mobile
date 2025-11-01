"use client";

import { useState } from "react";
import { useIonToast } from "@ionic/react";
import { useTranslation } from "react-i18next";

import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useSession from "@/hooks/useSession";
import { cn } from "@/lib/utils/utils";
import { LOGIN_API_URL } from "@/lib/routes/backend";
import { loginFormData } from "@/lib/types/forms";
import { getLoginFormSchema } from "@/lib/schemas/auth";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/custom/Button";

const LoginForm = () => {
  const { t } = useTranslation();
  const toastText  = (key: string) => t("Global.Toast");
  const formText   = (key: string) => t("Page.Login.LoginForm");
  const schemaText = (key: string) => t("Page.Login.LoginFormSchema");

  const [present] = useIonToast();

  const { login } = useSession();
  const [ isLoading, setIsLoading ] = useState(false);

  const submitLabel  = (isLoading ? formText("LoggingIn") : formText("Login"));

  const loginFormSchema = getLoginFormSchema(schemaText);
  const form = useForm<loginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    let toastMessage = "";
    let isError = false;

    try {
      setIsLoading(true);

      const loginPost = await axios.post(
        LOGIN_API_URL,
        { email, password },
        { timeout: 3000 }
      );

      if (!loginPost) {
        toastMessage= toastText("SendError");
        isError = true;
        return;
      }

      if (loginPost.status !== 200) {
        toastMessage = `${toastText("RequestError")}: ${loginPost.statusText}`;
        isError = true;
        return;
      }

      const payload = loginPost.data?.user ?? loginPost.data;

      login({
        id: payload.id,
        name: payload.name,
        email: payload.email,
        type: payload.type,
        initials: payload.initials,
        isLogin: true,
      });

    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        toastMessage = `${toastText("InternalError")}: ${error.response?.data.detail}`;
        isError = true;
      }

      else {
        toastMessage = `${toastText("UnexpectedError")}: ${error}`;
        isError = true;
      }
      
    } finally {
      setIsLoading(false);
      if (isError) toast.error(toastMessage);
    }
  };

  return (
    <Form {...form}>
      <form className="flex flex-col w-full gap-y-5 py-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-3">
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
                    autoFocus
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
                    placeholder={formText("Password")}
                    autoComplete="current-password"
                    required
                  />
                </FormControl>

                <FormMessage content={form.formState.errors.password?.message} />
              </FormItem>
            )}
          />
        </div>

        <Button 
          className={cn("bg-brand-primary dark:bg-brand-primary-hover", isLoading && "bg-brand-primary-hover dark:bg-brand-primary hover:cursor-default")}
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

export default LoginForm;