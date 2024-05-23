import BasePagination from "@/components/BasePagination";
import CardFeedback from "./CardFeedback";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListFeedback() {
  return (
    <BaseLayoutWraper>
      <div>
        <BasePagination
          subTitle="Testimonials"
          title="Khách Hàng nói gì về chúng tôi"
          titleButton="View All Testimonials"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          listItemData={[1, 2, 3, 4]}
          renderItem={() => {
            return (
              <div className="2xl:pt-16 lg:pt-12 pt-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <CardFeedback />
                <CardFeedback />
                <CardFeedback />
              </div>
            );
          }}
        ></BasePagination>
      </div>
    </BaseLayoutWraper>
  );
}
