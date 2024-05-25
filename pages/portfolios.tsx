import ListCategory from "@/modules/ListCategory";
import Layout from "../layouts";
import BannerPortfolio from "@/modules/BannerPortfolio";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";
import ListPortfolio from "@/modules/Portfolio/ListPortfolio";
import FilterPortfolio from "@/modules/Portfolio/FilterPortfolio";

export default function Portfolios() {
  const { data_store } = useDispatch<Dispatch>();
  const { getServices } = data_store;
  useEffect(() => {
    // getPortfolios({});
    getServices({});
  }, []);
  return (
    <Layout>
      <BannerPortfolio />
      <FilterPortfolio />
      <ListPortfolio />
      <ListCategory />
    </Layout>
  );
}
