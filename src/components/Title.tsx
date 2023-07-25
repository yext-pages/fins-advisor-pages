import { HexColor } from "@yext/studio";

export interface TitleProps {
  value: string;
  textSize: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  topMargin: "0" | "2" | "4" | "6" | "8" | "10";
  bottomMargin: "0" | "2" | "4" | "6" | "8" | "10";
  fontWeight:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
    backgroundColor?: HexColor;
    textColor?: HexColor;
}

export const initialProps: TitleProps = {
  value: "Title",
  textSize: "4xl",
  fontWeight: "medium",
  topMargin: "0",
  bottomMargin: "4",
};

const Title = ({
  value,
  textSize,
  fontWeight,
  topMargin,
  bottomMargin,
  backgroundColor,
  textColor,
}: TitleProps) => {
  const weightVariants = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const sizeVariants = {
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const topMarginVariants = {
    "0": "mt-0",
    "2": "mt-2",
    "4": "mt-4",
    "6": "mt-6",
    "8": "mt-8",
    "10": "mt-10",
  };

  const bottomMarginVariants = {
    "0": "mb-0",
    "2": "mb-2",
    "4": "mb-4",
    "6": "mb-6",
    "8": "mb-8",
    "10": "mb-10",
  };

  return (
    <div className="flex justify-center items-center" style={{backgroundColor}}>
      <div
        className={`not-prose mt-4 ${topMarginVariants[topMargin]} ${bottomMarginVariants[bottomMargin]}`}
      >
        <h1
          className={`${sizeVariants[textSize]} ${weightVariants[fontWeight]} tracking-tight`} style={{color:textColor}}
        >
          {value}
        </h1>
      </div>
    </div>
  );
};

export default Title;
