import BasePagination from "@/components/BasePagination";
import CardEvent from "./CardEvent";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseWraper from "@/components/BaseWraper";

export default function ListEvent() {
  return (
    <BaseLayoutWraper>
      <BaseWraper gutters={[["padding", 200, 'top']]}>
        <BasePagination
          size={3}
          subTitle="Services"
          title="My Photography Services"
          titleButton="View All Services"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          listItemData={[1, 2, 3]}
          renderItem={() => <CardEvent />}
        ></BasePagination>
      </BaseWraper>
    </BaseLayoutWraper>
  );
}
