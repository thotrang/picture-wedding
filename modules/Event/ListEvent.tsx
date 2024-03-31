import BasePagination from "@/components/BasePagination";
import CardEvent from "./CardEvent";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListEvent() {
  return (
    <BaseLayoutWraper>
      <div className="pt-[200px]">
        <BasePagination
          size={1}
          title="Services"
          content="My Photography Services"
          titleButton="View All Services"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
        ></BasePagination>
        <div className="pt-[60px]">
          <CardEvent />
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
