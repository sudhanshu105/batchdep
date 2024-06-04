import type { NextPage } from "next";
import css from './iphone.module.css';

export type IPhone13ProFrontIconType = {
  class1?: string;
  class2?: string;
  class3?: string;
};

const IPhone13ProFrontIcon: NextPage<IPhone13ProFrontIconType> = ({
  class1 = "img1",
  class2 = "img2",
  class3 = "img3",
}) => {
  return (
    <div>
      <img
        className={`absolute top-[calc(50%_-_2827.5px)] left-[calc(50%_+_51px)] w-[371.3px] h-[551.6px] object-contain ${css[class1]}`}
        alt=""
        src="/iphone13profront@2x.png"
      />
      <img
        className={`absolute top-[calc(50%_-_2827.5px)] left-[calc(50%_+_51px)] w-[371.3px] h-[551.6px] object-contain ${css[class2]}`}
        alt=""
        src="/iphone-13-Pro-Front 2.png"
      />
      <img
        className={`absolute top-[calc(50%_-_2827.5px)] left-[calc(50%_+_51px)] w-[371.3px] h-[551.6px] object-contain ${css[class3]}`}
        alt=""
        src="/iphone13profront@2x.png"
      />
    </div>
  );
};

export default IPhone13ProFrontIcon;
