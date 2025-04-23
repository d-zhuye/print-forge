import React from "react";

type HighlightBlockProps = {
  icon: React.ReactNode;
  header: string;
  content: string;
  styles?: string;
};

export default function HighlightBlock({
  icon,
  header,
  content,
  styles,
}: HighlightBlockProps) {
  return (
    <span
      className={`flex flex-col justify-start gap-y-4 lg:px-2 xl:px-8 ${styles}`}
    >
      <div className="flex flex-wrap items-center gap-[0.25rem]">
        <span className="w-[27px] h-[27px]">{icon}</span>
        <h2 className="grow">{header}</h2>
      </div>
      <p className="text-xl">{content}</p>
    </span>
  );
}
