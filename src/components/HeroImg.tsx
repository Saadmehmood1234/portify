import Image from "next/image";

interface SocialProps {
  imgSrc?: string;
  containerStyles?: string;
}

const HeroImg = ({ containerStyles = "", imgSrc }: SocialProps) => {
  if (!imgSrc) return null; // Ensure imgSrc is defined

  return (
    <div className={`${containerStyles} relative`}> {/* Ensure relative positioning */}
      <Image
        src={imgSrc}
        layout="fill" // Adjust the image to fill the parent container
        priority
        alt="Hero image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default HeroImg;
