import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { Area } from "react-easy-crop/types";
import { Camera, Check, X } from "lucide-react";

function getCroppedImg(imageSrc: string, crop: Area): Promise<string> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return reject("No ctx");

            const { x, y, width, height } = crop;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);
            resolve(canvas.toDataURL("image/jpeg")); // returns base64 string
        };
        image.onerror = reject;
    });
}

const UploadProfile: React.FC<{ onChange?: (file: File, preview: string) => void }> = ({
    onChange,
}) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
    const [finalPreview, setFinalPreview] = useState<string | null>(null);

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setImageSrc(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handleCropComplete = useCallback((_: Area, cropped: Area) => {
        setCroppedAreaPixels(cropped);
    }, []);

    const handleSave = async () => {
        if (!imageSrc || !croppedAreaPixels) return;
        const cropped = await getCroppedImg(imageSrc, croppedAreaPixels);
        setFinalPreview(cropped);

        // Convert base64 to File
        const res = await fetch(cropped);
        const blob = await res.blob();
        const file = new File([blob], "profile.jpg", { type: "image/jpeg" });
        onChange?.(file, cropped);
        setImageSrc(null);
    };

    return (
        <div className="flex flex-col items-center gap-4">
            {/* Final preview or default */}
            <div className="relative">
                <img
                    src={finalPreview || "https://github.com/shadcn.png"}
                    alt="Profile"
                    className="h-48 w-48 object-cover rounded-full border"
                />
                <button
                    type="button"
                    className="absolute bottom-1 right-1 bg-white rounded-full p-4 shadow bg-primary-900"
                    onClick={() => fileInputRef.current?.click()}
                >
                    <Camera className="h-5 w-5 text-white-100 " />
                </button>
            </div>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleSelect}
            />

            {/* Crop modal */}
            {imageSrc && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg w-[90vw] max-w-lg flex flex-col">
                        <div className="relative w-full h-80 bg-gray-900">
                            <Cropper
                                image={imageSrc}
                                crop={crop}
                                zoom={zoom}
                                aspect={1} // Force square ratio
                                onCropChange={setCrop}
                                onZoomChange={setZoom}
                                onCropComplete={handleCropComplete}
                            />
                        </div>
                        <input
                            type="range"
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e) => setZoom(Number(e.target.value))}
                            className="mt-4"
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                type="button"
                                className="px-4 py-2 rounded bg-gray-200"
                                onClick={() => setImageSrc(null)}
                            >
                                <X className="inline-block h-4 w-4" /> Cancel
                            </button>
                            <button
                                type="button"
                                className="px-4 py-2 rounded bg-blue-600 text-white"
                                onClick={handleSave}
                            >
                                <Check className="inline-block h-4 w-4" /> Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadProfile;
