import { Link } from "@yext/pages/components";
import { HexColor } from "@yext/studio";

interface FooterProps {
  backgroundColor?: HexColor;
  label1: string;
  link1: string;
  label2: string;
  link2: string;
  label3: string;
  link3: string;
  label4: string;
  link4: string;
  label5: string
  link5: string;
  textColor: HexColor;
  hoverColor?: "dark" | "light";
}

const Footer = ({
  label1,
  link1,
  label2,
  link2,
  label3,
  link3,
  label4,
  link4,
  link5,
  label5,
  backgroundColor,
  textColor,
  hoverColor,
}: FooterProps) => {
  const hoverColorVariants = {
    dark: "hover:bg-gray-700",
    light: "hover:bg-gray-50",
  };

  return (
    <footer
      className="mt-auto w-full"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <ul
        className="flex w-full items-center justify-center gap-6 p-4 md:gap-10 lg:px-6"
        style={{ backgroundColor, color: textColor }}
      >
        <li
          className={`rounded-lg py-2 text-sm font-semibold leading-6 md:px-4 ${hoverColorVariants[hoverColor]}`}
        >
          <Link href={link1}>{label1}</Link>
        </li>
        <li
          className={`rounded-lg py-2 text-sm font-semibold leading-6 md:px-4 ${hoverColorVariants[hoverColor]}`}
        >
          <Link href={link2}>{label2}</Link>
        </li>
        <li
          className={`rounded-lg py-2 text-sm font-semibold leading-6 md:px-4 ${hoverColorVariants[hoverColor]}`}
        >
          <Link href={link3}>{label3}</Link>
        </li>
        <li
          className={`rounded-lg py-2 text-sm font-semibold leading-6 md:px-4 ${hoverColorVariants[hoverColor]}`}
        >
          <Link href={link4}>{label4}</Link>
        </li>
        <li
          className={`rounded-lg py-2 text-sm font-semibold leading-6 md:px-4 ${hoverColorVariants[hoverColor]}`}
        >
          <Link href={link5}>{label5}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;