import BaseFilter from "@/components/BaseFilter";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "stores/store";

export default function FilterBlog() {
  const { data_store } = useDispatch<Dispatch>();
  const { getBlogs } = data_store;
  const { pagiBlogs } = useSelector((s: RootState) => s.data_store);

  return (
    <BaseLayoutWraper
      className={classNames(
        "2xl:mt-base100 lg:mt-base80 mt-base40 flex justify-center"
      )}
    >
      <BaseFilter
        itemTap={(id) => {
          getBlogs({
            params: id
              ? {
                  "filters[services][id][$eq]": id,
                  "pagination[page]": pagiBlogs.page,
                  "pagination[pageSize]": pagiBlogs.pageSize,
                }
              : {
                  "pagination[page]": pagiBlogs.page,
                  "pagination[pageSize]": pagiBlogs.pageSize,
                },
            type: "filter",
          });
        }}
      ></BaseFilter>
    </BaseLayoutWraper>
  );
}
