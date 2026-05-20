import { cn } from "@/utils/cn";

export const bottomNavStyles = {
  // Fixed bar: mobile px-4, tablet sm:px-10. Rounded top corners match Figma [8,8,0,0].
  root: "fixed bottom-0 left-0 right-0 z-50 flex bg-sidebar rounded-t-lg px-4 sm:px-10 pt-2",

  // Horizontally distribute items across the full width, capped at 800px to match Figma maxWidth.
  nav: "flex w-full max-w-[800px] mx-auto items-end justify-between",

  // Mobile: flex-1 (fill evenly). Tablet sm: fixed 104px per Figma spec.
  // Active indicator: top accent line (border-t-2) + bg-canvas fill.
  // Both states carry border-t-2 to prevent layout shift — inactive uses transparent.
  navItem: (isActive: boolean) =>
    cn(
      "flex flex-1 sm:flex-none sm:w-[104px] flex-col items-center justify-center",
      "gap-1 pt-2 pb-3 rounded-t-lg border-t-2 transition-colors min-h-11",
      isActive
        ? "bg-canvas border-t-accent px-6 "
        : "border-t-transparent text-muted hover:text-inverse",
    ),

  // Active icon gets accent color; inactive inherits text-muted from parent.
  navIcon: (isActive: boolean) =>
    cn("size-6 shrink-0", isActive && "text-accent"),

  // Labels hidden on mobile (<sm), visible on tablet+. Active gets foreground, inactive inherits muted.
  navLabel: (isActive: boolean) =>
    cn(
      "hidden sm:block text-preset-5 font-bold whitespace-nowrap",
      isActive ? "text-foreground" : "",
    ),
};
