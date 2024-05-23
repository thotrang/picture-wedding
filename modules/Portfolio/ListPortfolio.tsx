import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import CardPortfolio from "./CardPortfolio";

export default function ListPortfolio() {
  const { portfolios } = useSelector((s: RootState) => s.data_store);
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      {portfolios.map((item, index) => {
        return (
          <div key={index} className="2xl:pb-base50 pb-base30 ">
            <CardPortfolio item={item} />
          </div>
        );
      })}
    </BaseLayoutWraper>
  );
}
