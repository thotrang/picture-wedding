import Layout from "../layouts";
import ContactUs from "@/modules/ContactUs";
import ListCustomer from "@/modules/ListCustomer";
import BannerAboutUs from "@/modules/BannerAboutUs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";

export default function AboutUs() {
  const { data_store } = useDispatch<Dispatch>();
  const { getClients } = data_store;

  useEffect(() => {
    getClients({});
  }, []);
  return (
    <Layout>
      <BannerAboutUs />
      <ListCustomer />
      <ContactUs />
    </Layout>
  );
}
