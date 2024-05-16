import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListMedia() {
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
        <BasePagination
          subTitle="Giới thiệu"
          title="GIỚI THIỆU GOLDEN STAR MEDIA"
          titleButton="Tìm hiểu thêm"
          showMoreClick={() => {}}
          nextClick={() => {}}
          preClick={() => {}}
          renderItem={() => {
            return <CardMedia />;
          }}
          listItemData={[1]}
        ></BasePagination>
    </BaseLayoutWraper>
  );
}
