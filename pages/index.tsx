import BannerAuthor from "@/modules/BanerAuthor";
import BannerImages from "@/modules/BannerImages";
import CategoryList from "@/modules/CategoryList";
import Layout from "layouts";

export default function Home() {
  return (
    <Layout>
      <BannerAuthor />
      <CategoryList index={1}/>
      <BannerImages/>
      <CategoryList index={2}/>
    </Layout>
  );
}
