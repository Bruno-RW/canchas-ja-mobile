import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

export function getInitials(fullName?: string) {
  if (!fullName || typeof fullName !== "string") return "";

  const nameArray = fullName.split(" ").filter(Boolean);
  if (nameArray.length === 0) return "";

  const firstName = nameArray[0].charAt(0).toUpperCase();
  const lastName = nameArray[nameArray.length - 1].charAt(0).toUpperCase();

  return firstName + lastName;
};

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};