import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useRouter } from "next/router";
import { ERouter } from "routers";

export default function ListMedia({ handleContact }: any) {
  const router = useRouter();
  const infor: IInforAboutUs = {
    description: `GoldStar Media là một đơn vị chuyên chụp ảnh và sản xuất nội dung truyền thông đa dạng tại Việt Nam.
     Với đội ngũ nhân viên giàu kinh nghiệm và sự sáng tạo không ngừng, GoldStar Media cam kết mang đến những bức ảnh đẹp và nội dung sáng tạo,
      phản ánh chân thực và ấn tượng. Bằng cách tiếp cận mỗi dự án với tinh thần chuyên nghiệp và cẩn thận,
     GoldStar Media luôn đặt lợi ích của khách hàng lên hàng đầu, đảm bảo sự hài lòng và thành công trong mỗi sản phẩm mà chúng tôi tạo ra.`,
    contact: {
      email: "goldstarmedia.vn@gmail.com",
      phone: "088 669 36 88",
    },
    image: "/images/img_card_infor.png",
  };
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="VỀ CHÚNG TÔI"
        title="GIỚI THIỆU GOLDSTAR MEDIA"
        titleButton="Tìm hiểu thêm"
        showMoreClick={() => {
          router.push(ERouter.ABOUT_US);
        }}
        renderItem={() => {
          return <CardMedia infor={infor} handleContact={handleContact} />;
        }}
        listItemData={[1]}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
