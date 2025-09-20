import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string; // optional sizes attribute for responsive images
  placeholder?: string; // optional small blur placeholder
};

export function Image({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, 768px",
  placeholder,
  ...props
}: OptimizedImageProps) {
  return (
    <picture>
      {/* AVIF format */}
      <source
        srcSet={`${src}?format=avif&width=${width}&quality=80`}
        type="image/avif"
        sizes={sizes}
      />
      {/* WebP format */}
      <source
        srcSet={`${src}?format=webp&width=${width}&quality=80`}
        type="image/webp"
        sizes={sizes}
      />
      {/* Original fallback */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        {...props}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          background: placeholder
            ? `url(${placeholder}) center/cover no-repeat`
            : undefined,
          ...props.style,
        }}
      />
    </picture>
  );
}
