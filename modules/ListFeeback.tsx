import BasePagination from "@/components/BasePagination";

export default function ListFeedback() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
      <BasePagination
        size={1}
        title="Testimonials"
        content="Khách Hàng nói gì về chúng tôi"
        titleButton="View All Testimonials"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={()=>{}}
      ></BasePagination>
    </div>
  );
}
