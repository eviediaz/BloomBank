import React, { useState } from "react";
import Header from "@/components/home/Header";
import UserGreeting from "@/components/home/UserGreeting";
import CharacterSelection from "@/components/home/CharacterSelection";
import SeasonExplorer from "@/components/home/SeasonExplorer";
import Footer from "@/components/home/Footer";

const Index: React.FC = () => {
  // State for form elements could be added here
  const [userName, setUserName] = useState("Sofía");

  // This would be connected to an actual form in a real implementation
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <main className="bg-[rgba(246,193,211,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto min-h-screen">
      <Header />

      <div className="flex flex-col items-center w-full px-4">
        <UserGreeting
          name={userName}
          avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b83e65b8a27c2dc35341abec15bf131739f2939c?placeholderIfAbsent=true"
        />

        {/* Hidden form for name change - would be shown in a modal/settings page */}
        <form className="hidden">
          <label htmlFor="user-name">Your Name:</label>
          <input
            id="user-name"
            type="text"
            value={userName}
            onChange={handleNameChange}
            className="border rounded px-2 py-1"
          />
        </form>

        <CharacterSelection imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ff35291338b36efc3645d172f0817f563971021a?placeholderIfAbsent=true" />

        <SeasonExplorer
          backgroundUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/35427f0361453384588173fa6875fb425cff1cfe?placeholderIfAbsent=true"
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/815e86d0336c2cf988cb234cf759442b9f12b359?placeholderIfAbsent=true"
          seasonTitle="Ahorro para Work & Travel"
        />
      </div>

      <Footer navigationImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0c205903a2dd34588e223c934b580d21e919052f?placeholderIfAbsent=true" />
    </main>
  );
};

export default Index;
