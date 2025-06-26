import { useRef } from "react";

export const Card = ({
  date,
  title,
  subtitle,
  content,
  tags,
}: {
  date: string;
  title: string;
  subtitle?: string;
  content: string;
  tags: string[];
}) => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    titleRef.current?.classList.remove("text-white");
    titleRef.current?.classList.add("text-teal-300");
  };

  const handleMouseLeave = () => {
    titleRef.current?.classList.remove("text-teal-300");
    titleRef.current?.classList.add("text-white");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full flex flex-row gap-x-[50px] rounded-[5px] hover:bg-slate-400/10 px-[25px] py-[12px]"
    >
      <div className="flex justify-center py-[5px]">
        <p className="text-[14px] text-nowrap">{date}</p>
      </div>

      <div className="flex flex-col h-auto items-start gap-y-[5px]">
        <h1 ref={titleRef} className="text-[16px] ">
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <p className="text-[14px] flex-wrap opacity-75">{content}</p>
        <div className="flex flex-row gap-x-[15px] py-[5px]">
          {tags.map((e, i) => (
            <div
              className="bg-teal-400/10 rounded-full px-[10px] py-[6px]"
              key={i}
            >
              <p className=" text-[12px] text-teal-300">{e}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
