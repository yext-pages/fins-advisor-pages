import { HexColor } from "@yext/studio";

export interface VerticalStackProps {
  children: React.ReactNode;
  spacing: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  topMargin: "0" | "2" | "4" | "6" | "8" | "10";
  bottomMargin: "0" | "2" | "4" | "6" | "8" | "10";
  leftMargin: "0" | "2" | "4" | "6" | "8" | "10";
  rightMargin: "0" | "2" | "4" | "6" | "8" | "10";
  alignment: "left" | "center" | "right";
  backgroundColor?: HexColor
}

const VerticalStack = ({
  children,
  spacing,
  topMargin,
  bottomMargin,
  leftMargin,
  rightMargin,
  alignment,
  backgroundColor,
}: VerticalStackProps) => {
  const spacingVariants = {
    "0": "gap-0",
    "1": "gap-1",
    "2": "gap-2",
    "3": "gap-3",
    "4": "gap-4",
    "5": "gap-5",
    "6": "gap-6",
    "7": "gap-7",
    "8": "gap-8",
    "9": "gap-9",
    "10": "gap-10",
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

  const leftMarginVariants = {
    "0": "ml-0",
    "2": "ml-2",
    "4": "ml-4",
    "6": "ml-6",
    "8": "ml-8",
    "10": "ml-10",
  };

  const rightMarginVariants = {
    "0": "mr-0",
    "2": "mr-2",
    "4": "mr-4",
    "6": "mr-6",
    "8": "mr-8",
    "10": "mr-10",
  };

  const alignmentVariants = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  return (
    <div className="VStack conainer" style={{backgroundColor}}>
    <div className={`flex flex-col ${spacingVariants[spacing]} ${topMarginVariants[topMargin]} ${bottomMarginVariants[bottomMargin]} ${leftMarginVariants[leftMargin]} ${rightMarginVariants[rightMargin]}`}>
      {children}
    </div>
    </div>
  );
};

export default VerticalStack;