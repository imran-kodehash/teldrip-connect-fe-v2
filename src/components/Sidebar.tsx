import React, { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, Phone, User, Settings, LogOut } from "lucide-react";
import { toast } from "sonner";

type MenuItem = {
    title: string;
    label: string;
    icon: React.ElementType;
    link?: string;
    action?: () => void;
};

export default function Sidebar() {
    const location = useLocation();

    // Top menu items
    const topMenu: MenuItem[] = useMemo(
        () => [
            { title: "Dashboard", label: "Dashboard", icon: Home, link: "/dashboard" },
            { title: "Users", label: "Users", icon: Users, link: "/users" },
            { title: "Numbers", label: "Numbers", icon: Phone, link: "/numbers" },
            { title: "Contacts", label: "Contacts", icon: User, link: "/contacts" },
            { title: "Settings", label: "Settings", icon: Settings, link: "/settings" },
        ],
        []
    );

    // Bottom menu items
    const bottomMenu: MenuItem[] = useMemo(
        () => [
            {
                title: "Logout",
                label: "Logout",
                icon: LogOut,
                action: () => {
                    if (confirm("Are you sure you want to logout?")) {
                        toast("Logged out successfully!", { type: "success" });
                        localStorage.clear();
                        window.location.href = "/login";
                    }
                },
            },
        ],
        []
    );

    // Render Menu Item
    const renderMenuItem = (item: MenuItem) => {
        const Icon = item.icon;
        const isActive = item.link ? location.pathname.startsWith(item.link) : false;

        if (item.link) {
            return (
                <NavLink
                    key={item.title}
                    to={item.link}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md mx-2 my-1
          transition-colors duration-200
          ${isActive ? "bg-primary-100 text-primary-900" : "hover:bg-primary-50 hover:text-primary-700"}`}
                >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                </NavLink>
            );
        }

        if (item.action) {
            return (
                <button
                    key={item.title}
                    onClick={item.action}
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md mx-2 my-1
                     hover:bg-red-500 hover:text-white transition-colors duration-200"
                >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                </button>
            );
        }

        return null;
    };

    return (
        <aside className="flex flex-col justify-between w-64 bg-sidebar text-sidebar-foreground shadow-lg h-screen">
            {/* Top section */}
            <div className="flex flex-col pt-4">
                <div className="px-4 pb-4 font-bold text-lg border-b border-sidebar-border">MyApp</div>
                <nav className="flex-1 overflow-auto mt-4">
                    {topMenu.map(renderMenuItem)}
                </nav>
            </div>

            {/* Bottom section */}
            <div className="mb-4">
                {bottomMenu.map(renderMenuItem)}
            </div>
        </aside>
    );
}
