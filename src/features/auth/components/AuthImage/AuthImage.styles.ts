import { cn } from "@/utils/cn";

export const authImageStyles = {
  root: "hidden lg:flex p-5 w-1/2 h-full",
  card: cn(
    "relative flex-1 flex flex-col justify-between overflow-hidden",
    "bg-sidebar rounded-xl p-10",
  ),
  illustration: "absolute inset-0 w-full top-[-15%] left-[10%] h-full",
  content: "relative z-10 flex flex-col justify-between h-full",
  logo: "h-5 w-auto",
  textBlock: "flex flex-col gap-4",
  heading: "text-preset-1 font-bold text-inverse",
  body: "text-preset-6 text-inverse",
};
