import {
  HouseIcon,
  ArrowsDownUpIcon,
  ChartDonutIcon,
  JarIcon,
  ReceiptIcon,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { PRIVATE_ROUTE } from "@/routes/PrivateRoutes";

export interface NavItem {
  label: string;
  path: string;
  icon: Icon;
  end: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Overview",
    path: PRIVATE_ROUTE.OVERVIEW,
    icon: HouseIcon,
    end: true,
  },
  {
    label: "Transactions",
    path: PRIVATE_ROUTE.TRANSACTIONS,
    icon: ArrowsDownUpIcon,
    end: false,
  },
  {
    label: "Budgets",
    path: PRIVATE_ROUTE.BUDGETS,
    icon: ChartDonutIcon,
    end: false,
  },
  { label: "Pots", path: PRIVATE_ROUTE.POTS, icon: JarIcon, end: false },
  {
    label: "Recurring bills",
    path: PRIVATE_ROUTE.RECURRING_BILLS,
    icon: ReceiptIcon,
    end: false,
  },
];
