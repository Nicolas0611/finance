import { cn } from "@/utils/cn";

export const sidebarStyles = {
  root: (isMinimized: boolean) =>
    cn(
      "hidden lg:flex h-full flex-col bg-sidebar rounded-r-xl pb-6 gap-6 overflow-hidden transition-all duration-300",
      isMinimized ? "w-22" : "w-[300px]",
    ),
  logo: "flex items-center px-8 py-10 shrink-0",
  logoText: "text-inverse font-bold text-preset-5 whitespace-nowrap",
  nav: "flex flex-1 flex-col gap-1 pr-6 overflow-hidden",
  navItem: (isActive: boolean) =>
    cn(
      "relative flex min-h-14 items-center gap-4 rounded-r-xl px-8 py-4 transition-colors",
      isActive
        ? "text-inverse before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-r-sm before:bg-accent"
        : "text-muted hover:text-inverse",
    ),
  navIcon: "size-6 shrink-0",
  navLabel: "text-preset-6 font-bold whitespace-nowrap",
  minimize: cn(
    "flex min-h-14 items-center gap-4 rounded-r-xl px-8 py-4 transition-colors",
    "cursor-pointer text-muted hover:text-inverse",
  ),
  minimizeIcon: (isMinimized: boolean) =>
    cn(
      "size-6 shrink-0 transition-transform duration-300",
      isMinimized && "rotate-180",
    ),
  minimizeLabel: "text-preset-6 font-bold whitespace-nowrap",
};
