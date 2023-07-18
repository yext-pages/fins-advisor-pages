export interface ProductTableProps {
  title: string;
  rockerType?: string;
  shape?: string;
  core?: string;
  laminates?: string;
  sidewalls?: string;
  bindingCompatibility?: string;
}

export const initialProps: ProductTableProps = {
  title: "Product Details",
  rockerType:
    "All Mountain Rocker – Smooth rocker at both tip and tail with camber underfoot provides balanced performance anywhere on the mountain.",
  shape:
    "True Tip LT – By trimming the amount of heavy ABS plastic in the tip and extending the lightweight wood core into this area with a taper that further reduces weight, Nordica enhances playfulness and maneuverability of the ski without compromising that unmatchable feeling of powerful and control.",
  core: "Lite Performance Wood | Poplar / Beech",
  laminates:
    "Carbon Chassis LT – A proprietary blend of carbon materials to reduce weight while maximizing performance.",
  sidewalls: "ABS Sidewalls",
  bindingCompatibility:
    "We recommend a brake width equal to or at most 15 mm wider than the ski waist width.",
};

const ProductTable = ({
  title,
  rockerType,
  shape,
  core,
  laminates,
  sidewalls,
  bindingCompatibility,
}: ProductTableProps) => {
  const renderRow = (rowTitle: string, value: string) => {
    return (
      // title should be a fixed width so that the value is aligned
      <div className="border-t border-gray-400 py-2">
        <div className="grid grid-cols-4 gap-x-4">
          <dt className="text-sm font-medium text-gray-500">{rowTitle}</dt>
          <dd className="col-span-3 text-sm text-gray-900">{value}</dd>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4">
      <h2 className="text-lg font-medium text-gray-900">{title}</h2>
      <div className="mt-4">
        <div className="gap-x-4 gap-y-8">
          {rockerType && renderRow("Rocker Type", rockerType)}
          {shape && renderRow("Shape", shape)}
          {core && renderRow("Core", core)}
          {laminates && renderRow("Laminates", laminates)}
          {sidewalls && renderRow("Sidewalls", sidewalls)}
          {bindingCompatibility &&
            renderRow("Binding Compatibility", bindingCompatibility)}
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
