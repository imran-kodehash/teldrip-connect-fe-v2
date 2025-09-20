import React from "react";

export type NetworkStripType = "Offline" | "Slow" | "Connected";

interface NetworkStripProps {
    type: NetworkStripType;
}

const STATES: Record<NetworkStripType, {
    icon: string;
    text: string;
    bg: string;
    textColor: string;
}> = {
    Offline: {
        icon: "🔴",
        text: "You are offline",
        bg: "bg-red-100",
        textColor: "text-red-700",
    },
    Slow: {
        icon: "🟡",
        text: "Your connection is slow",
        bg: "bg-yellow-100",
        textColor: "text-yellow-700",
    },
    Connected: {
        icon: "🟢",
        text: "You are connected",
        bg: "bg-green-100",
        textColor: "text-green-700",
    },
};

const NetworkStrip: React.FC<NetworkStripProps> = ({ type }) => {
    const { icon, text, bg, textColor } = STATES[type];

    return (
        <div
            className={`w-full max-h-10 ${bg} ${textColor} text-center py-2 text-sm font-medium transition-all`}
        >
            <span className="mr-1">{icon}</span>
            {text}
        </div>
    );
};

export default NetworkStrip;
