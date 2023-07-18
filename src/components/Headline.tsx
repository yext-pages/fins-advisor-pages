export interface HeadlineProps {
  value: string;
  textSize?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
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

export const initialProps: HeadlineProps = {
  value: "Headline",
  textSize: "xl",
  fontWeight: "medium",
};

const Headline = ({ value, textSize, fontWeight }: HeadlineProps) => {
  return (
    <div className="mt-4">
      <h1
        className={`text-${textSize} font-${fontWeight} tracking-tight text-gray-900`}
      >
        {value}
      </h1>
    </div>
  );
};

export default Headline;
