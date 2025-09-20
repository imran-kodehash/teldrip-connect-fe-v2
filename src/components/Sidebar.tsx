import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { Image } from "./Image";
import { sidebarBottomMenu, sidebarTopMenu } from "@/data/sidebar";

type MenuItem = {
  title: string;
  label: string;
  icon: React.ElementType;
  link?: string;
  number?: number;
  action?: () => void;
};

export default function Sidebar() {
  const location = useLocation();

  // Top menu items
  const topMenu: MenuItem[] = useMemo(() => sidebarTopMenu, []);

  // Bottom menu items
  const bottomMenu: MenuItem[] = useMemo(() => sidebarBottomMenu, []);

  // Render Menu Item
  const renderMenuItem = (item: MenuItem) => {
    const Icon = item.icon;
    const isActive = item.link
      ? location.pathname.startsWith(item.link)
      : false;

    if (item.link) {
      return (
        <NavLink
          key={item.title}
          to={item.link}
          className={`flex items-center text-gray-900  gap-3 px-4 py-3 text-base font-normal rounded-xl mx-6 my-1
          transition-colors duration-200 group
          ${isActive
              ? "bg-primary-900 text-white-100"
              : "hover:bg-[#4D3EAA] hover:text-white-100"
            }`}
        >
          <Icon className="w-5 h-5" />
          <span>{item.label}</span>
          {item.number !== undefined && (
            <span className="ml-auto flex group-hover:text-white-100 group-hover:border-white-100 items-center justify-center rounded-full border border-primary-900 bg-primary-300/20  text text-primary-900  text-white text-xs font-semibold w-5 h-5">
              {item.number}
            </span>
          )}
        </NavLink>
      );
    }

    if (item.action) {
      return (
        <button
          key={item.title}
          onClick={item.action}
          className="flex text-black-900 w-[80%]  items-center gap-2 px-4 py-3 text-base font-normal rounded-xl mx-6 my-1
                     hover:bg-primary-900 hover:text-white-100 transition-colors duration-200"
        >
          <Icon className="w-5 h-5" />
          <span>{item.label}</span>
        </button>
      );
    }

    return null;
  };

  return (
    <aside className="flex flex-col justify-between w-64 bg-white-100 border-r border-secondary-900  text-sidebar-foreground h-screen">
      {/* Top section */}
      <div className="flex flex-col pt-4">
        <div className="px-8 pb-2 font-bold text-lg">
          <Image
            src={Logo}
            alt="Logo"
            width={110}
            height={35}
            className="!w-[120px]"
          />
        </div>
        <nav className="flex-1 overflow-auto mt-4">
          {topMenu.map(renderMenuItem)}
        </nav>
      </div>

      {/* Bottom section */}
      <div className="mb-4">{bottomMenu.map(renderMenuItem)}</div>
    </aside>
  );
}
