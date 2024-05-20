import Layout from "../layouts";
import ContactUs from "@/modules/ContactUs";
import ListCustomer from "@/modules/ListCustomer";
import BannerAboutUs from "@/modules/BannerAboutUs";

export default function AboutUs() {
  return (
    <Layout>
      <BannerAboutUs />
      <ListCustomer />
      <ContactUs />
    </Layout>
  );
}
