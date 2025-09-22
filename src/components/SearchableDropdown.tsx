import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

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

    // close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const filtered = options.filter(opt =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    const selectOption = (opt: Option) => {
        onChange?.(opt);
        setSearch(opt.label);       // show chosen label
        setOpen(false);
    };

    console.log("filtered", search, filtered)


    return (
        <div ref={ref} className={cn("relative w-full", className)}>
            <div className="border border-secondary-300 rounded-lg p-3 flex justify-between items-center">
                {open ? <input
                    type="text"
                    placeholder={placeholder}
                    value={search || value?.label || ""}
                    onChange={e => {
                        setSearch(e.target.value);
                        if (!open) setOpen(true);
                    }}
                    autoFocus
                    className="flex-1 outline-none"
                /> : <button className="w-full flex justify-start items-center text-primary-800 text-base font-normal" onClick={() => setOpen(true)}>{value?.label || placeholder}</button>
                }
                <ChevronDown />
            </div>

            {open && (
                <ul className="absolute z-10 w-full mt-1 max-h-60 overflow-auto border rounded-md bg-white shadow-lg bg-white-100">
                    {filtered.length ? (
                        filtered.map((opt, index) => (
                            <li
                                key={`${opt.id}-${opt.label}-${index}`}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                                onMouseDown={e => {
                                    e.preventDefault();
                                    selectOption(opt);
                                }}
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
