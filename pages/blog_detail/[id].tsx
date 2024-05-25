import Layout from "@/layouts/index";
import BannerBlogDetail from "@/modules/Blog/BannerBlogDetail";
import ContentBlogDetail from "@/modules/Blog/ContentBlogDetail";
import ListBlog from "@/modules/Blog/ListBlogs";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "stores/store";

export default function BlogDetail() {
  const { data_store } = useDispatch<Dispatch>();
  const { getBlog, getBlogs, getServices } = data_store;
  const router = useRouter();
  const blogId = router.query.id;
  useEffect(() => {
    getBlogs({});
    getServices({})
    if (blogId) getBlog(blogId);
  }, [blogId]);
  return (
    <Layout>
      <BannerBlogDetail />
      <ContentBlogDetail/>
      <ListBlog/>
    </Layout>
  );
}
