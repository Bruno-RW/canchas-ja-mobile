import { cn } from "@/lib/utils/utils";

interface FormErrorMessageProps {
  className?: string;
  message?: string;
};

const FormErrorMessage: React.FC<FormErrorMessageProps> = ({ className, message }) => {
  return <span className={cn("text-red-500 ml-2", className)}>{message}</span>;
};

export default FormErrorMessage;