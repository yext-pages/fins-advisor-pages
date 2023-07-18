
export interface CTASectionCenteredProps {
  heading?: string;
  paragraph?: string;
  cta1Label?: string;
  cta1Color?: string;
  cta2Label?: string;
  cta2Color?: string;
}

const CTASectionCentered = (props: CTASectionCenteredProps) => {
  const { heading, paragraph, cta1Label, cta1Color, cta2Label, cta2Color } =
    props;

  const cta1Styling = {
    backgroundColor: `${cta1Color}`,
  };

  const cta2Styling = {
    backgroundColor: `${cta2Color}`,
  };

  return (
    <>
      <div className="bg-white">
        <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              {paragraph}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                style={cta1Styling}
              >
                {cta1Label}
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900"
                style={cta2Styling}
              >
                {cta2Label} <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASectionCentered;
