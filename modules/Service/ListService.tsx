import BasePagination from "@/components/BasePagination";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import CardService from "./CardService";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";

export default function ListService() {
  const { services } = useSelector((s: RootState) => s.stores);

  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Services"
        title="My Photography Services"
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
        listItemData={services}
        renderItem={(item, index) => <CardService item={item} key={index} />}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
