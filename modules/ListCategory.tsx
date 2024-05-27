import "swiper/css";
import "swiper/css/free-mode";

import Dot from "public/icons/Dot";
import AutoScroll from "@/components/AutoScroll";
import { useSelector } from "react-redux";
import { RootState } from "stores/store";
import { get } from "lodash-es";
import { IService } from "@/types/service";
import BaseTextButton from "@/components/BaseTextButton";
import { useRouter } from "next/router";
import { ERouter } from "routers";
interface IListCategory {}
export default function ListCategory({}: IListCategory) {
  const { services } = useSelector((s: RootState) => s.data_store);
  const router = useRouter();
  return (
    <AutoScroll
      className=" bg-backgroundSecond border-solid border-y border-x-0 border-borderColor"
      listItemData={services}
      renderItem={(item: IService, i) => {
        return (
          <div key={i}>
            <BaseTextButton
              tag="span"
              className="!text-textNavigate pl-2 flex justify-center items-center gap-8"
              size="S"
              onClick={() => {
                router.push(ERouter.PORTFOLIO + `?serviceId=${item.attributes.slug}`);
              }}
            >
              <Dot />
              {get(item, "attributes.title", "").toUpperCase()}
            </BaseTextButton>
          </div>
        );
      }}
    />
  );
}
