import BasePagination from "@/components/BasePagination";
import CardFeedback from "./CardFeedback";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListFeedback() {
  return (
    <BaseLayoutWraper>
      <div className="pt-[200px]">
        <BasePagination
          size={1}
          title="Testimonials"
          content="Khách Hàng nói gì về chúng tôi"
          titleButton="View All Testimonials"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
        ></BasePagination>
        <div className="pt-[60px] grid grid-cols-3 gap-8">
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
        </div>
      </div>
    </BaseLayoutWraper>
  );
}
