import BaseWraper from "@/components/BaseWraper";
import BannerAuthor from "@/modules/BanerAuthor";
import BannerImages from "@/modules/BannerImages";
import CategoryList from "@/modules/CategoryList";
import ListEvent from "@/modules/Event/ListEvent";
import ListFeedback from "@/modules/Feedback/ListFeeback";
import ListMedia from "@/modules/Media/ListMedia";
import ListProject from "@/modules/Project/ListProject";
import ListQuestion from "@/modules/Question/ListQuestion";
import Layout from "layouts";

export default function Home() {
  return (
    <Layout>
      <BannerAuthor />
      <CategoryList index={1} />
      <BannerImages />
      <ListMedia />
      <ListEvent />
      <ListProject />
      <ListQuestion />
      <ListFeedback />
      <BaseWraper gutters={[["padding", 200, "top"]]}>
        <CategoryList index={2} />
      </BaseWraper>
    </Layout>
  );
}
