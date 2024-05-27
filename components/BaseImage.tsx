import classNames from "classnames";
import type { ImageProps } from "next/image";
import ImageNext from "next/image";
import { useEffect, useRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
export interface BaseImageProps extends ImageProps {
  src: string;
  imageErrorDefault?: string;
  showViewer?: boolean;
}

function BaseImage({
  src = "",
  className = "",
  alt,
  showViewer,
  imageErrorDefault,
  ...props
}: BaseImageProps) {
  const viewerRef = useRef<any>();
  const [srcImg, setSrcImg] = useState<string>(src);
  const [openViewer, setOpenViewer] = useState(false);
  const setErrorImg = async () => {
    setSrcImg(imageErrorDefault ?? "/error-img.png");
  };
  useEffect(() => {
    setSrcImg(src);
  }, [src]);

  return (
    <>
      <ImageNext
        {...props}
        width={0}
        height={0}
        loading="lazy"
        sizes="100vw"
        className={classNames(`h-auto w-full rounded-xl`, className, {
          'cursor-pointer': showViewer
        })}
        alt={alt ?? ""}
        src={srcImg}
        onError={setErrorImg}
        onClick={() => {
          if (showViewer) {
            setOpenViewer(true);
            setTimeout(() => {
              viewerRef.current.zoomInBtn.current.click();
            }, 100);
            setTimeout(() => {
              viewerRef.current.zoomOutBtn.current.click();
            }, 100);
          }
        }}
      />
      {openViewer && (
        <Lightbox
          ref={viewerRef}
          onCloseRequest={() => setOpenViewer(false)}
          mainSrc={src}
        ></Lightbox>
      )}
    </>
  );
}

export default BaseImage;
