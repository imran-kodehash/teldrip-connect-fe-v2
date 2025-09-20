import React, { useState, useCallback, memo, ReactNode } from "react";
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
        <div className="flex flex-col md:flex-row gap-4">
            <div className="flex w-auto">
                <ul className="w-auto flex flex-col justify-center items-start font-medium text-center border-r border-red-900">
                    {tabs.map((tab) => {

                        const isActive = activeTab === tab.value;

                        const baseClasses =
                            "inline-block w-full py-2 border-gray-200 border-l-4 ";
                        const activeClasses = " text-primary-900 border-l-4 border-[#604ED5]  font-semibold";
                        const inactiveClasses = "border-transparent";

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

export const VerticalTabs = memo(TabsComponent);
