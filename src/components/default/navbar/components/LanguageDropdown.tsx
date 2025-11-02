import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageDropdown = () => {
  const { t, i18n } = useTranslation();
  const text = (key: string) => t(`Component.Default.Navbar.${key}`);

  const locale = i18n.language;

  const languages = [
    { code: "en", name: text("LanguageEN"), flag: "🇺🇸" },
    { code: "pt", name: text("LanguagePT"), flag: "🇧🇷" },
    { code: "es", name: text("LanguageES"), flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{text("Language")}</span>

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 px-3 text-sm font-normal justify-between min-w-[100px] hover:cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-md">{currentLanguage?.flag}</span>
              {currentLanguage?.name}
            </span>

            <ChevronDown className="h-3 w-3 opacity-50" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40">
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="flex items-center justify-between hover:cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-md">{language.flag}</span>
                {language.name}
              </span>

              {locale === language.code && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageDropdown;
