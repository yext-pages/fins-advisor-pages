import cx from "classnames";
import * as React from "react";

type Props = {
  //Insert Props Here
  className?: string;
  children: React.ReactNode;
  href?: string;
};

const Card = ({ className, children, href }: Props) => {
  return (
    <a
      className={cx(
        className,
        "bg-gray-100 rounded-sm p-4 border hover:bg-white hover:shadow-md transition-transform hover:scale-105"
      )}
      href={href}
    >
      {children}
    </a>
  );
};

export default Card;