import Layout from "../layouts";
import BannerService from "@/modules/BannerService";
import ContactFormGroup from "@/modules/ContactUs/ContactGroup";
import ListServiceVertical from "@/modules/Service/ListServiceVertical";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";

export default function Services() {
  const { data_store } = useDispatch<Dispatch>();
  const { getServices } = data_store;

  useEffect(() => {
    getServices({});
  }, []);

  return (
    <Layout>
      <BannerService />
      <ListServiceVertical />
      <ContactFormGroup />
    </Layout>
  );
}
