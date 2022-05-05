import { CloseButton } from "../CloseButton";
import bug from "../../assets/bug.svg";
import idea from "../../assets/idea.svg";
import thought from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bug,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: idea,
      alt: "Imagem de um lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thought,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 rounded-2xl w-[calc(100vw-2rem)] md:w-auto p-4 mb-4 flex flex-col items-center shadow-lg">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} onFeedbackRestartRequested={handleRestartFeedback} />
      )}
      <footer className="text-xs text-zinc-400 font-medium">
        Feito com ♥ pela{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2 hover:text-zinc-100"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
