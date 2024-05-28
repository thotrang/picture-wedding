import BaseImage from "@/components/BaseImage";
import BaseText from "@/components/BaseText";
import { IPortfolio } from "@/types/portfolio";
import { motion } from "framer-motion";
import { get } from "lodash-es";
import { useRouter } from "next/router";
import { ERouter } from "routers";
interface ICardPortfolio {
  item: IPortfolio;
}
export default function CardPortfolio({ item }: ICardPortfolio) {
  const { attributes } = item;
  const router = useRouter();
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, opacity: 0.3 }}
      className="w-full aspect-square relative rounded-xl overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(ERouter.PORTFOLIO_DETAIL + "/" + attributes.slug);
      }}
    >
      <div className="absolute h-full w-full">
        <BaseImage
          className="h-full w-full object-cover"
          alt=""
          src={get(attributes, "thumbnail.data.attributes.url", "")}
        />
      </div>
      <div className="absolute z-5 bg-gradient-to-b from-white/0 via-black/50 to-black h-full w-full" />
      <div className="absolute z-10 left-0 bottom-0 w-full">
        <div className="p-4 gap-4">
          <BaseText className="font-medium" size="XS" tag="h2">
            {attributes.title}
          </BaseText>
        </div>
      </div>
    </motion.div>
  );
}
