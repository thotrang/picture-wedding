import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListMedia() {
  return (
    <BaseLayoutWraper>
      <div className="pt-[200px]">
        <BasePagination
          size={1}
          title="Giới thiệu"
          content="GIỚI THIỆU GOLDEN STAR MEDIA"
          titleButton="Tìm hiểu thêm"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          renderItem={() => {
            return <CardMedia />;
          }}
          listItemData={[1, 2, 3]}
        ></BasePagination>
        <div className="pt-[60px]"></div>
      </div>
    </BaseLayoutWraper>
  );
}
