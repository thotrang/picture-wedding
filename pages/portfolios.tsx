import ListCategory from "@/modules/ListCategory";
import Layout from "../layouts";
import BannerPortfolio from "@/modules/BannerPortfolio";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";
import ListPortfolio from "@/modules/Portfolio/ListPortfolio";

export default function Portfolios() {
  const { data_store } = useDispatch<Dispatch>();
  const { getPortfolios } = data_store;
  useEffect(() => {
    getPortfolios({});
  }, []);
  return (
    <Layout>
      <BannerPortfolio />
      <ListPortfolio />
      <ListCategory />
    </Layout>
  );
}
