import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className={"top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"}
        >
          <ArrowLeft weight="bold" size={16} />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className={"w-6 h-6"}
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] border-2 border-zinc-600 bg-zinc-900 rounded focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-track-transparent scrollbar-thumb-zinc-700 scrollbar-thin text-sm"
          placeholder="Conte com detalhes o que está acontecendo..."
        />
        <footer className="flex gap-2">
          <button
            type="button"
            className="rounded bg-zinc-800 w-10 h-10 text-zinc-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-700"
            disabled
          >
            <Camera size={24} />
          </button>
          <button
            type="submit"
            className="rounded w-full h-10 bg-brand-500 text-sm leading-6 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            disabled={true}
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
