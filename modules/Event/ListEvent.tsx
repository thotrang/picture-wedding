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
        >
          <div className="pt-[60px]">
            <CardEvent />
          </div>
        </BasePagination>
      </div>
    </BaseLayoutWraper>
  );
}
