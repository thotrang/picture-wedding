import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseWraper from "@/components/BaseWraper";

export default function ListMedia() {
  return (
    <BaseLayoutWraper>
      <BaseWraper gutters={[['padding', 200, 'top']]}>
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
      </BaseWraper>
    </BaseLayoutWraper>
  );
}
