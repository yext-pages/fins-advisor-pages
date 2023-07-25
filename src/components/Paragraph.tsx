export interface ParagraphProps {
  value: string;
  textSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
    bottomMargin: "0" | "2" | "4" | "6" | "8" | "10";
}

export const initialProps: ParagraphProps = {
  value: "Paragraph",
  textSize: "base",
  fontWeight: "normal",
  bottomMargin:"4"
}

  const Paragraph = ({
    value,
    textSize,
    fontWeight,
    bottomMargin,
  }: ParagraphProps) => {

const bottomMarginVariants = {
  "0": "mb-0",
  "2": "mb-2",
  "4": "mb-4",
  "6": "mb-6",
  "8": "mb-8",
  "10": "mb-10",
};
  
  return (
    <section aria-labelledby="information-heading" className={`mt-4 ${bottomMarginVariants[bottomMargin]}`}>
      <div className="whitespace-pre-line mt-4 space-y-6">
        <p className={`text-${textSize} font-${fontWeight} text-gray-500`}>
          {value}
        </p>
      </div>
    </section>
  );
};

export default Paragraph;
