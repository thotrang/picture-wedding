import BannerAuthor from "@/modules/BanerAuthor";
import BannerImages from "@/modules/BannerImages";
import CategoryList from "@/modules/CategoryList";
import ListEvent from "@/modules/Event/ListEvent";
import ListFeedback from "@/modules/ListFeeback";
import ListProject from "@/modules/ListProject";
import ListQuestion from "@/modules/ListQuestion";
import ListMedia from "@/modules/Media/ListMedia";
import Layout from "layouts";

export default function Home() {
  return (
    <Layout>
      <BannerAuthor />
      <CategoryList index={1}/>
      <BannerImages/>
      <ListMedia/>
      <ListEvent/>
      <ListProject/>
      <ListQuestion/>
      <ListFeedback/>
      <CategoryList index={2}/>
    </Layout>
  );
}
