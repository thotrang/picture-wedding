import { useEffect } from "react";
import Layout from "../../layouts";
import ListCategory from "@/modules/ListCategory";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";
import { useRouter } from "next/router";
import BannerPortfolioDetail from "@/modules/BannerPortfolioDetail";
import GridImagePortfolio from "@/modules/Portfolio/GridImagePortfolio";
import ContactFormGroup from "@/modules/ContactUs/ContactGroup";
import InforPortfolio from "@/modules/Portfolio/InforPortfolio";
import NextPortfolios from "@/modules/Portfolio/NextPortfolios";

export default function PortfolioDetail() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolio, getPortfolios } = data_store;
  const router = useRouter();
  const portfolioId = router.query.id?.[1];

  useEffect(() => {
    if (portfolioId) getPortfolio(portfolioId);
    getPortfolios({})
  }, [portfolioId]);
  return (
    <Layout>
      <BannerPortfolioDetail />
      <InforPortfolio />
      <GridImagePortfolio />
      <NextPortfolios />
      <ContactFormGroup />
      <ListCategory />
    </Layout>
  );
}
