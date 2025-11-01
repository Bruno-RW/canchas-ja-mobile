import { useTranslation } from "react-i18next";
import { LuInfo } from "react-icons/lu";

import { cn } from "@/lib/utils/utils";

import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormLabelProps {
  children?: React.ReactNode;
  required?: boolean;
  tooltip?: string;
  content?: string;
  className?: string;
}

const FormLabel: React.FC<FormLabelProps> = ({
  className = "",
  required = false,
  tooltip,
  content,
  children,
}) => {
  const { t } = useTranslation("Global.Form");

  return (
    <Label className={cn("flex items-start gap-x-1", className)}>
      {content}

      {children}

      {tooltip && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <LuInfo
                className="h-3 w-3 text-foreground bg-transparent cursor-help"
                aria-label={t("AditionalInfo")}
              />
            </TooltipTrigger>

            <TooltipContent className="bg-background text-foreground shadow-sm">
              <span>{tooltip}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {required && (
        <span
          className="text-red-500 dark:text-red-300"
          aria-label={t("RequiredField")}
        >
          *
        </span>
      )}
    </Label>
  );
};

export default FormLabel;
