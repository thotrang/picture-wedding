import BasePagination from "@/components/BasePagination";
import CardEvent from "./CardEvent";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListEvent() {
  return (
    <BaseLayoutWraper>
      <div className="pt-[200px]">
        <BasePagination
          size={3}
          title="Services"
          content="My Photography Services"
          titleButton="View All Services"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          listItemData={[1, 2, 3]}
          renderItem={() => <CardEvent />}
        ></BasePagination>
      </div>
    </BaseLayoutWraper>
  );
}
