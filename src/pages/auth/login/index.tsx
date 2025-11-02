import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useSession from "@/hooks/useSession";

import LoginForm from "@/components/forms/LoginForm";

const LoginPage = () => {
  const { t } = useTranslation();
  const text = (key: string) => t(`Page.Login.LoginPage.${key}`);

  const { user } = useSession();
  const history = useHistory();

  useEffect(() => {
    if (user.isLogin) history.replace("/");
  }, [user.isLogin]);

  return (
    <section className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-1/3 py-6 px-5 border rounded-md border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-none">
      <h1 className="text-5xl font-bold mb-5">{text("Title")}</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;