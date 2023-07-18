export interface HeroImageProps {
  src: string;
  alt: string;
  leftPadding: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "20";
}

const HeroImage = ({
  src, 
  alt,
  leftPadding,
}: HeroImageProps) => {
  const leftPaddingVariants = {
    "0": "pl-0",
    "1": "pl-1",
    "2": "pl-2",
    "3": "pl-3",
    "4": "pl-4",
    "5": "pl-5",
    "6": "pl-6",
    "7": "pl-7",
    "8": "pl-8",
    "9": "pl-9",
    "10": "pl-10",
    "20": "pl-20",
  };
  return (
    <div className="col-start-2 row-span-2 self-center">
      <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover object-center ${leftPaddingVariants[leftPadding]}`}
        />
      </div>
    </div>
  );
}
export default HeroImage;