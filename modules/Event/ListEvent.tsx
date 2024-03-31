import BasePagination from "@/components/BasePagination";
import CardEvent from "./CardEvent";

export default function ListEvent() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
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
  );
}
