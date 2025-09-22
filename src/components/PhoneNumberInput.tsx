import { countryCodes } from "@/data/countries";
import { useState, useMemo, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

interface PhoneNumberInputProps {
    phoneNumber: string;
    country?: Country | null;
    onPhoneChange?: (value: string) => void;
    onCountryChange?: (country: Country) => void;
    disabled?: boolean;
}

export interface Country {
    code: string;
    country: string;
    flag: string;
    abbr: string;
}

export default function PhoneNumberInput({
    phoneNumber,
    country,
    onPhoneChange,
    onCountryChange,
    disabled,
}: PhoneNumberInputProps) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const containerRef = useRef<HTMLDivElement>(null);

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (/^\d*$/.test(inputValue)) {
            // Allow only digits
            if (onPhoneChange) {
                onPhoneChange(inputValue);
            }
        }
    };

    const handleSelect = (selected: Country) => {
        if (onCountryChange) {
            onCountryChange(selected);
        }
        setDropdownOpen(false);
        setSearchTerm("");
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredCountries = useMemo(() => {
        if (!searchTerm) return countryCodes;
        return countryCodes.filter(
            (c) =>
                c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                c.code.includes(searchTerm)
        );
    }, [searchTerm]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }

        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div ref={containerRef} className="relative w-full">
                <div className="flex items-center border rounded-lg bg-white-100 overflow-hidden">
                    {/* Country selector */}
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="flex items-center gap-2 p-3 border-r bg-white-100 overflow-hidden"
                        disabled={disabled}
                    >
                        <img src={country?.flag || "https://flagpedia.net/data/flags/h80/us.png"}
                            alt={country?.country || "US"}
                            width={20}
                            height={20}
                            className="h-5 w-5 bg-cover rounded-full"
                        />
                        <span className="text-sm font-medium">{country?.code || "+1"}</span>
                    </button>

                    {/* Phone Input */}
                    <input
                        disabled={disabled}
                        // type="number"
                        className="flex-1 px-4 py-4 outline-none placeholder:text-muted-foreground placeholder:text-sm text-sm"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                    />
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                    <div className="absolute left-0 top-14 z-20 bg-white-100 border rounded-sm w-60 shadow-md max-h-80 overflow-y-auto ">
                        {/* Search input */}
                        <div className="p-2">
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md outline-none text-sm"
                                placeholder="Search country..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>

                        {/* Country list */}
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((c, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(c)}
                                    className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 justify-between"
                                >
                                    <div className="flex gap-1 items-center">
                                        <img
                                            src={c.flag}
                                            alt={c.country}
                                            width={20}
                                            height={20}
                                            className="h-5 w-5 bg-cover rounded-full"
                                        />
                                        <span className="text-sm text-gray-500">{c.country}</span>
                                    </div>
                                    <span>{c.code}</span>
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500 text-center">
                                No country found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
