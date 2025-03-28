import React, { useState } from "react";

interface CharacterSelectionProps {
  imageUrl: string;
}

const CharacterSelection: React.FC<CharacterSelectionProps> = ({
  imageUrl,
}) => {
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null,
  );

  // This would be expanded with actual character selection functionality
  const handleCharacterSelect = () => {
    setSelectedCharacter(1);
  };

  return (
    <section className="bg-[rgba(255,225,235,1)] flex w-full max-w-[357px] flex-col items-stretch text-xl text-white font-normal leading-none mt-[53px] pb-[23px] rounded-2xl">
      <h2 className="bg-[rgba(238,115,145,1)] px-[17px] py-[22px] rounded-2xl">
        Selecciona un personaje
      </h2>
      <button
        onClick={handleCharacterSelect}
        className="focus:outline-none"
        aria-label="Select character"
      >
        <img
          src={imageUrl}
          alt="Character selection"
          className="aspect-[1.98] object-contain w-full self-center max-w-[329px] mt-1.5 rounded-[28px]"
        />
      </button>
    </section>
  );
};

export default CharacterSelection;
