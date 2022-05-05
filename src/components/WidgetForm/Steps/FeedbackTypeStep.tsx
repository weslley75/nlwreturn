import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}
export function FeedbackTypeStep({
  onFeedbackTypeChange,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            type={"button"}
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            className="bg-zinc-800 p-5 rounded-lg w-24 flex-1 flex flex-col items-center  border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span className="text-sm leading-6">{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
