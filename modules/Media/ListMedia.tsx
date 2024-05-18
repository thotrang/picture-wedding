import BasePagination from "@/components/BasePagination";
import CardMedia from "./CardMedia";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";

export default function ListMedia() {
  const infor: IInforAboutUs = {
    description: `My journey as a photographer has been a lifelong quest to capture
    the extraordinary in the ordinary, to freeze fleeting moments in
    time, and to share the world's beauty as I see it. Based in the
    enchanting landscapes of the USA, I find inspiration in every corner
    of this diverse and vibrant country. Join me as we embark on a
    visual odyssey, where each photograph tells a story, and every frame
    is a piece of my heart.`,
    contact: {
      email: "nguyenanhtuan@gmail.com",
      phone: "+00000000000",
    },
    image: "/images/2197ef21088292b2d8ba67bc7a698f5f.png",
  };
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s">
      <BasePagination
        subTitle="Giới thiệu"
        title="GIỚI THIỆU GOLDEN STAR MEDIA"
        titleButton="Tìm hiểu thêm"
        showMoreClick={() => {}}
        renderItem={() => {
          return <CardMedia infor={infor} />;
        }}
        listItemData={[1]}
      ></BasePagination>
    </BaseLayoutWraper>
  );
}
