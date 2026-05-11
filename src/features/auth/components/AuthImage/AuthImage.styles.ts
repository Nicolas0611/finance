import { cn } from "@/utils/cn";

export const authImageStyles = {
  root: "hidden lg:flex p-5 w-1/2 h-full",
  card: cn(
    "relative flex-1 flex flex-col justify-between overflow-hidden",
    "bg-sidebar rounded-xl p-10",
  ),
  illustration: "absolute inset-0 w-full h-full object-cover",
  content: "relative z-10 flex flex-col justify-between h-full",
  logo: "h-5 w-auto",
  textBlock: "flex flex-col gap-6",
  heading: "text-preset-3 font-bold text-inverse",
  body: "text-preset-6 text-inverse",
};
