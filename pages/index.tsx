import BannerAuthor from "@/modules/BanerAuthor";
import BannerImages from "@/modules/BannerImages";
import ListCategory from "@/modules/ListCategory";
import ListCustomer from "@/modules/ListCustomer";
// import ListFeedback from "@/modules/Feedback/ListFeeback";
import ListMedia from "@/modules/Media/ListMedia";
import ListProject from "@/modules/Project/ListProject";
import ListQuestion from "@/modules/Question/ListQuestion";
import ListService from "@/modules/Service/ListService";
import Layout from "layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";

export default function Home() {
  const { stores } = useDispatch<Dispatch>();
  const { getServices, getPortfolios } = stores;

  useEffect(() => {
    getServices({});
    getPortfolios({});
  }, []);

  return (
    <Layout>
      <BannerAuthor />
      <ListCategory />
      <BannerImages />
      <ListMedia />
      <ListService />
      <ListProject />
      <ListCustomer />
      <ListQuestion />
      {/* <ListFeedback /> */}
      <div className="2xl:pt-top-l lg:pt-top-m pt-top-s">
        <ListCategory />
      </div>
    </Layout>
  );
}
