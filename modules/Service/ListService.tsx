import BasePagination from "@/components/BasePagination";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useEffect, useState } from "react";
import CardService from "./CardService";
import { IService } from "@/types/service";
import ServiceRepository from "apis/repositories/service";

export default function ListService() {
  const [listService, setListService] = useState<IService[] | []>([]);
  const initData = async () => {
    const res = await ServiceRepository.get({
      populate: "*",
    });
    setListService(res);
  };
  useEffect(() => {
    initData();
  }, []);

  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Services"
        title="My Photography Services"
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
        listItemData={listService}
        renderItem={(item, index) => <CardService item={item} key={index} />}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
