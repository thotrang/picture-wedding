import { useEffect } from "react";
import Layout from "../../layouts";
import ListCategory from "@/modules/ListCategory";
import ContactForm from "@/modules/ContactUs/ContactForm";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";
import { useRouter } from "next/router";
import BannerPortfolioDetail from "@/modules/BannerPortfolioDetail";
import GridImagePortfolio from "@/modules/Portfolio/GridImagePortfolio";

export default function PortfolioDetail() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolio } = data_store;
  const router = useRouter();
  const portfolioId = router.query.id;
  useEffect(() => {
    if (portfolioId) getPortfolio(portfolioId);
  }, [portfolioId]);
  return (
    <Layout>
      <BannerPortfolioDetail />
      <GridImagePortfolio />
      <ContactForm />
      <ListCategory />
    </Layout>
  );
}
