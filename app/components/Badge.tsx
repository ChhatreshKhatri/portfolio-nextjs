"use client"
import Image, { ImageLoader } from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  className: string;
}

const imageLoader: ImageLoader = ({ src }) => {
  return `https://img.shields.io/${src}`;
};

const CustomImage: React.FC<CustomImageProps> = ({ src,alt,className }) => {
  return (
    <Image
      loader={imageLoader}
      src={src}
      alt="Picture of the author"
      width={500}
      height={500}
      className={`h-[45px] w-auto ${className}`}
    />
  );
};

export default CustomImage;
