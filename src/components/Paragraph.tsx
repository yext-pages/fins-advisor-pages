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
}

export const initialProps: ParagraphProps = {
  value: "Paragraph",
  textSize: "base",
  fontWeight: "normal",
};

const Paragraph = ({ value, textSize, fontWeight }: ParagraphProps) => {
  return (
    <section aria-labelledby="information-heading" className="mt-4">
      <div className="mt-4 space-y-6">
        <p className={`text-${textSize} font-${fontWeight} text-gray-500`}>
          {value}
        </p>
      </div>
    </section>
  );
};

export default Paragraph;
