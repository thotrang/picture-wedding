import BasePagination from "@/components/BasePagination";
import { useMemo } from "react";
import QuestionItem from "./QuestonItem";
import classNames from "classnames";

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
    const list: any = {
      0: [],
      1: [],
    };
    questions.forEach((q, index) => {
      if (index % 2 === 0) list[0].push(q);
      else list[1].push(q);
    });
    return list;
  }, questions);
  return (
    <div className="w-full max-w-screen-2xl mx-auto pt-[200px]">
      <BasePagination
        size={1}
        title="FAQ’s"
        content="Câu hỏi thường gặp"
        titleButton="View All Services"
        showMoreClick={() => {}}
        nextClick={() => {}}
        preClick={() => {}}
      ></BasePagination>
      <div className="grid grid-cols-2">
        {Object.keys(questionConvertToShow).map((key, index) => {
          return (
            <div
              key={key}
              className={classNames(" py-[20px]", {
                "border border-borderColor border-solid border-l-0 border-y-0":
                  index === 0,
              })}
            >
              {questionConvertToShow[key].map((q, index) => {
                return (
                  <QuestionItem
                    key={index}
                    item={q}
                    showBottomLine={
                      index < questionConvertToShow[key].length - 1
                    }
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
