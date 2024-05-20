import Layout from "../layouts";
import BannerService from "@/modules/BannerService";
import ListServiceVertical from "@/modules/Service/ListServiceVertical";

export default function Services() {
  return (
    <Layout>
      <BannerService />
      <ListServiceVertical />
    </Layout>
  );
}
