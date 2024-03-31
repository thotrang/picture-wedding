import type { ImageProps } from "next/image";
import ImageNext from "next/image";
import { useEffect, useState } from "react";

export interface BaseImageProps extends ImageProps {
  src: string;
  imageErrorDefault?: string;
}

function BaseImage({
  src = "",
  className = "",
  alt,
  imageErrorDefault,
  ...props
}: BaseImageProps) {
  const [srcImg, setSrcImg] = useState<string>(src);

  const setErrorImg = async () => {
    setSrcImg(imageErrorDefault ?? "/error-img.png");
  };
  useEffect(() => {
    setSrcImg(src);
  }, [src]);
  return (
      <ImageNext
        {...props}
        width={0}
        height={0}
        loading="lazy"
        sizes="100vw"
        className={`h-auto w-full ${className}`}
        alt={alt ?? ""}
        src={srcImg}
        onError={setErrorImg}
      />
  );
}

export default BaseImage;
