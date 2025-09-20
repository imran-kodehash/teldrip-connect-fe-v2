import {
  LayoutGrid,
  Users,
  Mailbox,
  PhoneCall,
  Notebook,
  Wallet,
  Bell,
  Volume2,
  Settings,
  Power,
} from "lucide-react";

export const sidebarTopMenu = [
  {
    title: "Dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
    link: "/dashboard",
  },
  {
    title: "Call Logs",
    label: "Call Logs",
    icon: PhoneCall,
    link: "/collogs",
  },
  { title: "Inbox", label: "Inbox", icon: Mailbox, link: "/inbox" },
  {
    title: "Contacts",
    label: "Contacts",
    icon: Notebook,
    link: "/contacts",
  },
  {
    title: "Campaigns",
    label: "Campaigns",
    icon: Volume2,
    link: "/campaigns",
  },
  { title: "Users", label: "Users", icon: Users, link: "/users" },
  { title: "Number", label: "Number", icon: PhoneCall, link: "/number" },
  { title: "Plans", label: "Plans", icon: Wallet, link: "/plans" },
];

export const sidebarBottomMenu = [
  {
    title: "Settings",
    label: "Settings",
    icon: Settings,
    link: "/settings",
  },
  {
    title: "Notifications",
    label: "Notifications",
    icon: Bell,
    link: "/notifications",
    number: "4",
  },
  {
    title: "Logout",
    label: "Logout",
    icon: Power,
    action: () => {
      if (confirm("Are you sure you want to logout?")) {
        toast("Logged out successfully!", { type: "success" });
        localStorage.clear();
        window.location.href = "/login";
      }
    },
  },
];
