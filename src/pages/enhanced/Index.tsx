import React, { useState } from "react";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import Header from "@/components/home/Header";
import UserGreeting from "@/components/home/UserGreeting";
import CharacterSelection from "@/components/home/CharacterSelection";
import SeasonExplorer from "@/components/home/SeasonExplorer";
import Footer from "@/components/home/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Enhanced version of the Index page with more interactive elements
 * This demonstrates how the basic components could be extended with more functionality
 */
const EnhancedIndex: React.FC = () => {
  const [userName, setUserName] = useState("Sofía");
  const [selectedCharacter, setSelectedCharacter] = useState<number | null>(
    null,
  );
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleCharacterSelect = (id: number) => {
    setSelectedCharacter(id);
  };

  const characters = [
    {
      id: 1,
      name: "Character 1",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff35291338b36efc3645d172f0817f563971021a?placeholderIfAbsent=true",
    },
    {
      id: 2,
      name: "Character 2",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ff35291338b36efc3645d172f0817f563971021a?placeholderIfAbsent=true",
    },
  ];

  const seasons = [
    {
      id: 1,
      title: "Ahorro para Work & Travel",
      backgroundUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/35427f0361453384588173fa6875fb425cff1cfe?placeholderIfAbsent=true",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/815e86d0336c2cf988cb234cf759442b9f12b359?placeholderIfAbsent=true",
    },
    {
      id: 2,
      title: "Viaje a Europa",
      backgroundUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/35427f0361453384588173fa6875fb425cff1cfe?placeholderIfAbsent=true",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/815e86d0336c2cf988cb234cf759442b9f12b359?placeholderIfAbsent=true",
    },
  ];

  return (
    <MobileAppLayout>
      <Header />

      <div className="flex flex-col items-center w-full px-4">
        <div className="flex justify-end w-full max-w-[349px] mt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white">
                Settings
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Profile Settings</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={userName}
                    onChange={handleNameChange}
                    className="col-span-3"
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <UserGreeting
          name={userName}
          avatarUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/b83e65b8a27c2dc35341abec15bf131739f2939c?placeholderIfAbsent=true"
        />

        <CharacterSelection imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/ff35291338b36efc3645d172f0817f563971021a?placeholderIfAbsent=true" />

        <div className="w-full max-w-[357px] mt-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {characters.map((character) => (
              <button
                key={character.id}
                onClick={() => handleCharacterSelect(character.id)}
                className={`flex-shrink-0 p-2 rounded-lg ${
                  selectedCharacter === character.id
                    ? "bg-[rgba(238,115,145,1)] text-white"
                    : "bg-white text-[rgba(238,115,145,1)]"
                }`}
              >
                {character.name}
              </button>
            ))}
          </div>
        </div>

        <SeasonExplorer
          backgroundUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/35427f0361453384588173fa6875fb425cff1cfe?placeholderIfAbsent=true"
          iconUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/815e86d0336c2cf988cb234cf759442b9f12b359?placeholderIfAbsent=true"
          seasonTitle="Ahorro para Work & Travel"
        />

        <div className="w-full max-w-[357px] mt-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {seasons.map((season) => (
              <button
                key={season.id}
                className="flex-shrink-0 p-2 rounded-lg bg-white text-[rgba(238,115,145,1)]"
              >
                {season.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer navigationImageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/0c205903a2dd34588e223c934b580d21e919052f?placeholderIfAbsent=true" />
    </MobileAppLayout>
  );
};

export default EnhancedIndex;
