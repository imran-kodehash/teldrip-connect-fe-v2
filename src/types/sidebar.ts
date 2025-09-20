import { LucideIcon } from "lucide-react";

export type SidebarItem = {
  title: string;
  label: string;
  icon: LucideIcon;
  link?: string;
  action?: () => void;
};
