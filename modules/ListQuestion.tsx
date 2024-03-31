import BasePagination from "@/components/BasePagination";

export default function ListQuestion() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
      <BasePagination
        size={1}
        title="FAQ’s"
        content="Câu hỏi thường gặp"
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={()=>{}}
      ></BasePagination>
    </div>
  );
}
