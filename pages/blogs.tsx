import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts";
import { Dispatch, RootState } from "stores/store";
import HeaderBlogs from "@/modules/Blog/HeaderBlogs";
import CardBlog from "@/modules/Blog/CardBlog";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import FilterBlog from "@/modules/Blog/FilterBlog";
import ListCategory from "@/modules/ListCategory";
import ListBlogVertical from "@/modules/Blog/ListBlogVertical";
import { IBLog } from "@/types/blog";

export default function Blogs() {
  const { blogs } = useSelector((s: RootState) => s.data_store);
  const { data_store } = useDispatch<Dispatch>();
  const { getBlogs, getServices } = data_store;
  useEffect(() => {
    getBlogs({});
    getServices({});
  }, []);

  return (
    <Layout>
      <HeaderBlogs />
      <FilterBlog />
      <BaseLayoutWraper className="2xl:py-base80 lg:py-base60 py-base30">
        <CardBlog item={blogs[1] ?? {} as IBLog} smallImage />
      </BaseLayoutWraper>
      <ListBlogVertical />
      <ListCategory />
    </Layout>
  );
}
