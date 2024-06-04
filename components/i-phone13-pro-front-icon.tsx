import type { NextPage } from "next";

export type IPhone13ProFrontIconType = {
  className?: string;
};

const IPhone13ProFrontIcon: NextPage<IPhone13ProFrontIconType> = ({
  className = "",
}) => {
  return (
    <img
      className={`absolute top-[calc(50%_-_2827.5px)] left-[calc(50%_+_51px)] w-[371.3px] h-[551.6px] object-contain ${className}`}
      alt=""
      src="/iphone13profront@2x.png"
    />
  );
};

export default IPhone13ProFrontIcon;
