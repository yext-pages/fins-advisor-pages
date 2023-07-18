export interface BigButtonProps {
  title?: string;
  href?: string;
}

export const initialProps: BigButtonProps = {
  title: "Button Title",
  href: "#",
};

const BigButton = ({ href, title }: BigButtonProps) => {
  return (
    <div className="mt-10">
      <a
        href={href}
        className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-200 py-3 px-8 text-base font-medium text-white"
      >
        {title}
      </a>
    </div>
  );
};

export default BigButton;
