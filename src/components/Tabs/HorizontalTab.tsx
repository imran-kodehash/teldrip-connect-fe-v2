import React, { useState, useCallback, memo } from "react";
import type { ReactNode } from "react"
import { cn } from "@/lib/utils";

interface Tab {
    label: string;
    value: string;
    content: ReactNode; // added content for automatic rendering
}

interface TabsProps {
    tabs: Tab[];
    initialTab?: string;
    onTabChange?: (tab: Tab) => void;
}

const TabsComponent: React.FC<TabsProps> = ({ tabs, initialTab, onTabChange }) => {
    const [activeTab, setActiveTab] = useState(initialTab ?? tabs[0].value);

    const handleChange = useCallback(
        (value: string) => {
            setActiveTab(value);
            const selectedTab = tabs.find(tab => tab.value === value);
            if (selectedTab && onTabChange) onTabChange(selectedTab);
        },
        [tabs, onTabChange]
    );

    const activeTabContent = tabs.find(tab => tab.value === activeTab)?.content;

    return (
        <div className="w-full">
            <div className="flex w-auto">
                <ul className="w-auto flex font-medium text-center rounded-full border border-secondary-200">
                    {tabs.map((tab) => {

                        const isActive = activeTab === tab.value;

                        const baseClasses =
                            "inline-block w-full py-1 border-gray-200";
                        const activeClasses = "bg-primary-200 text-primary-900 border border-[#604ED5] rounded-full font-medium";
                        const inactiveClasses = "";

                        return (
                            <li key={tab.value} className=" focus-within:z-10">
                                <button
                                    onClick={() => handleChange(tab.value)}
                                    className={cn(
                                        baseClasses,
                                        isActive ? activeClasses : inactiveClasses,
                                        "px-5 text-primary-400 text-base font-normal "
                                    )}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Active Tab Content */}
            <div className="mt-4">
                {activeTabContent}
            </div>
        </div>
    );
};

export const HorizontalTabs = memo(TabsComponent);
