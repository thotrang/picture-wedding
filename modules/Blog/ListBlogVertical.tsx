import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";
import BaseTextButtonNavigate from "@/components/BaseTextButtonNavigate";
import BaseText from "@/components/BaseText";
import { useMemo } from "react";
import CardBlog from "./CardBlog";

export default function ListBlogVertical() {
  const { data_store } = useDispatch<Dispatch>();
  const { getBlogs } = data_store;

  const { blogs, pagiBlogs } = useSelector((s: RootState) => s.data_store);
  const showMoreButton = useMemo(() => {
    return blogs.length < pagiBlogs.total;
  }, [blogs, pagiBlogs]);

  return (
    <BaseLayoutWraper className="2xl:pt-base100 lg:pt-base80 pt-base40 pb-base100">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-base30">
        {blogs.map((item, index) => {
          return (
            <div key={index} className="col-span-1 pb-base40 last:pb-0">
              <CardBlog item={item} />
            </div>
          );
        })}
      </div>

      {showMoreButton && (
        <div className="text-center">
          <BaseTextButtonNavigate
            onClick={() => {
              getBlogs({
                type: "view_more",
                params: {
                  "pagination[page]": pagiBlogs.page + 1,
                  "pagination[pageSize]": pagiBlogs.pageSize,
                },
              });
            }}
          >
            <BaseText size="S" tag="span">
              XEM THÊM DỰ ÁN
            </BaseText>
          </BaseTextButtonNavigate>
        </div>
      )}
    </BaseLayoutWraper>
  );
}
