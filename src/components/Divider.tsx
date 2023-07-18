
export interface DividerProps {
  color?: string;
  width?: string;
}

const Divider = (props: DividerProps) => {
  const { color, width } = props;

  const style = {
    borderColor: `${color}`,
    borderWidth: `${width}`,
  };

  return (
    <>
      <div className="relative py-5 bg-white">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-500" style={style} />
        </div>
        <div className="relative flex justify-center"></div>
      </div>
    </>
  );
};

export default Divider;
