export interface LabelProps {
  value: string;
}

export const initialProps: LabelProps = {
  value: "Label",
};

const Label = ({ value }: LabelProps) => {
  return (
    <div className="flex items-center">
      <p className="text-lg text-gray-900 sm:text-xl">{value}</p>
    </div>
  );
};

export default Label;
