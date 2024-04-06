import Star from "public/icons/Star";
import { useMemo } from "react";

interface IBaseRating {
  total?: number;
  rate?: number;
}
export default function BaseRating({ total = 5, rate = 5 }: IBaseRating) {
  const rateDisplay = useMemo(() => {
    const stars = [];
    let i = 0;
    while (i < total) {
      stars.push(
        <Star
          key={i}
          className={`h-6 w-6 pr-2 ${
            i < rate ? "text-[#FFCE22]" : "text-gray-500"
          }`}
        />
      );
      i++;
    }
    return stars;
  }, [total]);
  return <div className="flex items-center">{rateDisplay}</div>;
}
