import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Option {
    id: string | number;
    label: string;
}

interface SearchableDropdownProps {
    options: Option[];
    value?: Option | null;
    onChange?: (option: Option) => void;
    placeholder?: string;
    className?: string;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
    options,
    value = null,
    onChange,
    placeholder = "Select...",
    className,
}) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
                setSearch("");
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Filter options based on search
    const filteredOptions = options.filter(opt =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    const handleSelect = (option: Option) => {
        onChange?.(option);
        setOpen(false);
        setSearch("");
    };

    return (
        <div ref={ref} className={cn("relative w-full", className)}>
            {/* Input box */}
            <div
                className="border rounded-md px-3 py-2 flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(prev => !prev)}
            >
                <input
                    type="text"
                    placeholder={placeholder}
                    value={open ? search : value?.label || ""}
                    onChange={e => setSearch(e.target.value)}
                    onFocus={() => setOpen(true)}
                    className="w-full outline-none cursor-pointer"
                />
                <span className="ml-2">&#9662;</span> {/* dropdown arrow */}
            </div>

            {/* Options list */}
            {open && (
                <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border rounded-md bg-white shadow-lg">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(opt => (
                            <li
                                key={opt.id}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(opt)}
                            >
                                {opt.label}
                            </li>
                        ))
                    ) : (
                        <li className="px-3 py-2 text-gray-400">No options found</li>
                    )}
                </ul>
            )}
        </div>
    );
};
