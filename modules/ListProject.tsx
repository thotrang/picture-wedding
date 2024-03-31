import BasePagination from "@/components/BasePagination";

export default function ListProject() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
      <BasePagination
        size={1}
        title="Portfolio"
        content="Explore My photography work."
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={()=>{}}
      ></BasePagination>
    </div>
  );
}
