import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";

export default function ListMedia() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
      <BasePagination
        size={1}
        title="Giới thiệu"
        content="GIỚI THIỆU GOLDEN STAR MEDIA"
        titleButton="Tìm hiểu thêm"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
      ></BasePagination>
      <div className="pt-[60px]">
        <CardMedia />
      </div>
    </div>
  );
}
