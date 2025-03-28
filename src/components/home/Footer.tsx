import React from "react";

interface FooterProps {
  navigationImageUrl: string;
}

const Footer: React.FC<FooterProps> = ({ navigationImageUrl }) => {
  return (
    <footer className="bg-[rgba(238,115,145,1)] self-stretch flex w-full flex-col items-stretch justify-center mt-[25px] px-[33px] py-[22px] rounded-[20px_20px_10px_10px]">
      <nav aria-label="Main navigation">
        <img
          src={navigationImageUrl}
          alt="Navigation menu"
          className="aspect-[13.16] object-contain w-[314px]"
        />
      </nav>
    </footer>
  );
};

export default Footer;
