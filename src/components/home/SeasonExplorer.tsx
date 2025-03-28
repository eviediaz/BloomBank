
import React from "react";
import { useNavigate } from "react-router-dom";

interface SeasonExplorerProps {
  backgroundUrl: string;
  iconUrl: string;
  seasonTitle: string;
}

const SeasonExplorer: React.FC<SeasonExplorerProps> = ({
  backgroundUrl,
  iconUrl,
  seasonTitle,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seasons");
  };

  return (
    <section
      className="bg-[rgba(255,225,235,1)] flex w-full max-w-[357px] flex-col items-stretch text-white mt-[49px] pb-6 rounded-2xl cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="bg-[rgba(238,115,145,1)] text-xl font-normal leading-none px-[17px] py-[22px] rounded-2xl">
        Explorar temporadas
      </h2>
      <div className="flex flex-col self-center relative aspect-[2.273] w-full max-w-[325px] text-lg font-semibold tracking-[-0.73px] mt-7 pl-4 pr-[65px] py-[21px] rounded-[0px_0px_0px_0px]">
        <img
          src={backgroundUrl}
          alt="Season background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <img
          src={iconUrl}
          alt="Season icon"
          className="aspect-[1] object-contain w-10 rounded-[9px]"
        />
        <div className="relative shadow-[0px_0px_4px_rgba(0,0,0,0.8)] mt-10">
          {seasonTitle}
        </div>
      </div>
    </section>
  );
};

export default SeasonExplorer;
