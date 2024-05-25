import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BasePagination from "@/components/BasePagination";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import CardBlog from "./CardBlog";
import { useRouter } from "next/router";
import { ERouter } from "routers";

export default function ListBlog() {
  const { blogs } = useSelector((s: RootState) => s.data_store);
  const router = useRouter()
  return (
    <BaseLayoutWraper className="2xl:py-base80 lg:py-base60 py-base40">
      <BasePagination
        slidesPerView={3}
        renderItem={(item, index) => {
          return <CardBlog item={item} key={index} />;
        }}
        listItemData={blogs}
        subTitle={""}
        title={"BÀI VIẾT MỚI NHẤT"}
        titleButton="Xem tất cả bài viết"
        showMoreClick={()=>router.push(ERouter.BLOG)}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
