import BasePagination from "@/components/BasePagination";
import { useMemo } from "react";
import QuestionItem from "./QuestonItem";
import classNames from "classnames";
import BaseLayoutWraper from "@/components/BaseLayoutWraper";
import BaseWraper from "@/components/BaseWraper";
import BaseText from "@/components/BaseText";

export default function ListQuestion() {
  const questions = [
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
    {
      title: "What type of photography do you specialize in?",
      description:
        "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories.",
    },
  ];
  const questionConvertToShow = useMemo(() => {
    const list: {
      [key: string]: {
        title: string;
        description: string;
      }[];
    } = {
      "0": [],
      "1": [],
    };
    questions.forEach((q, index) => {
      if (index % 2 === 0) list[0]?.push(q);
      else list[1]?.push(q);
    });
    return list;
  }, questions);
  return (
    <BaseLayoutWraper className="2xl:pt-top-l lg:pt-top-m pt-top-s 2xl:pb-">
      <div className="2xl:pb-base50 lg:pb-base40 pb-base20">
        <BaseText
          tag="span"
          size="XS"
          className="font-semibold text-textColorSecond"
          content="FAQ’s"
        ></BaseText>
        <BaseText
          tag="h1"
          size="L"
          className="font-semibold  pt-2"
          content="Câu hỏi thường gặp"
        ></BaseText>
      </div>
      <div
        className={classNames(
          "grid lg:grid-cols-2 grid-cols-1",
          "border-solid border-b-0 border-t border-borderColor border-x-0"
        )}
      >
        {Object.keys(questionConvertToShow).map((key, index) => {
          return (
            <div
              key={key}
              className={classNames("", {
                "border-0 border-borderColor border-solid lg:border-r max-lg:border-b": index === 0,
              })}
            >
              {questionConvertToShow[key]?.map((q, index) => {
                return (
                  <QuestionItem
                    key={index}
                    item={q}
                    showBottomLine={
                      index < (questionConvertToShow[key]?.length ?? 0) - 1
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </BaseLayoutWraper>
  );
}
