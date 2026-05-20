export const mainLayoutStyles = {
  root: "flex h-screen bg-canvas overflow-hidden",
  // Desktop sidebar is hidden below lg; bottom nav is fixed so main needs bottom padding
  // to prevent content being obscured:
  //   mobile  → pb-[52px]  (bottom nav height: pt-2 + 44px item)
  //   tablet  → sm:pb-[74px] (bottom nav height: pt-2 + 66px item)
  //   desktop → lg:pb-0 (no bottom nav)
  main: "flex-1 overflow-auto pb-[52px] sm:pb-[74px] lg:pb-0",
};
