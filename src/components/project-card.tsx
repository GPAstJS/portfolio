import { useRef } from "react";

export const ProjectCard = ({
  image,
  title,
  content,
  tags,
}: {
  image: string;
  title: string;
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
    <div  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full flex flex-row  gap-x-[50px] rounded-[5px] hover:bg-slate-400/10 px-[25px] py-[12px] ">
      <div>
        <img className="text-nowrap text-[14px]" src={image} alt="2025 - Present" />
      </div>

      <div className="flex flex-col gap-y-[12px]">
        <h1 ref={titleRef} >{title}</h1>
        <p>{content}</p>
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
