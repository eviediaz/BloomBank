
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import { Card } from "@/components/ui/card";

const WorkTravelEpisodes: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileAppLayout>
      {/* Header */}
      <div className="bg-[rgba(238,115,145,1)] w-full flex items-center p-4 text-white">
        <button onClick={() => navigate("/seasons")} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-medium">Explorar episodios</h1>
        <div className="ml-auto">
          <img
            src="/lovable-uploads/167c952f-acd4-4e60-ad46-80c6553405d7.png"
            alt="User avatar with pink hair"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Episodes List */}
      <div className="flex flex-col gap-4 w-full px-4 mt-6 pb-8">
        {/* Episode 1 */}
        <Card 
          className="bg-[rgba(255,225,235,1)] overflow-hidden rounded-xl p-4 cursor-pointer"
          onClick={() => navigate("/episode1")}
        >
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-[rgba(245,182,201,1)] rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/c98d37e1-b233-4e25-a236-a0c37ff2f3d9.png" 
                alt="Warning sign" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[rgba(238,115,145,1)] text-lg font-bold">Episodio 1:</h3>
              <p className="text-[rgba(238,115,145,1)]">La Realidad Golpea</p>
              <div className="mt-2 flex items-center">
                <div className="bg-[rgba(238,115,145,1)] w-[25%] h-3 rounded-l-full"></div>
                <div className="bg-white w-[75%] h-3 rounded-r-full"></div>
                <span className="ml-2 text-[rgba(238,115,145,1)]">25%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Episode 2 */}
        <Card className="bg-[rgba(255,225,235,1)] overflow-hidden rounded-xl p-4">
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-[rgba(245,182,201,1)] rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/25580cb4-55f3-44c6-81d1-b239afe86059.png" 
                alt="No coffee symbol" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[rgba(238,115,145,1)] text-lg font-bold">Episodio 2:</h3>
              <p className="text-[rgba(238,115,145,1)]">Collect 10 different Cards!</p>
              <div className="mt-2 flex items-center">
                <div className="bg-[rgba(238,115,145,1)] w-[60%] h-3 rounded-l-full"></div>
                <div className="bg-white w-[40%] h-3 rounded-r-full"></div>
                <span className="ml-2 text-[rgba(238,115,145,1)]">60%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Episode 3 */}
        <Card className="bg-[rgba(255,225,235,1)] overflow-hidden rounded-xl p-4">
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-[rgba(245,182,201,1)] rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/c618f455-3f36-4188-8e37-42560176e295.png" 
                alt="Money jar" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[rgba(238,115,145,1)] text-lg font-bold">Episodio 3:</h3>
              <p className="text-[rgba(238,115,145,1)]">Unlock all Cards!</p>
              <div className="mt-2 flex items-center">
                <div className="bg-[rgba(238,115,145,1)] w-[10%] h-3 rounded-l-full"></div>
                <div className="bg-white w-[90%] h-3 rounded-r-full"></div>
                <span className="ml-2 text-[rgba(238,115,145,1)]">10%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Knowledge Test Section */}
        <div className="mt-4 mb-2">
          <p className="text-[rgba(238,115,145,1)] font-medium">Pon aprueba tus conocimientos:</p>
        </div>

        {/* Financial Value Card */}
        <Card className="bg-[rgba(255,225,235,1)] overflow-hidden rounded-xl p-4">
          <div className="flex gap-4">
            <div className="h-20 w-20 bg-[rgba(245,182,201,1)] rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/3fd7f2c0-d119-4c4d-983a-034131443938.png" 
                alt="Question mark chair" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-[rgba(238,115,145,1)] text-lg font-bold">El valor financiero</h3>
              <p className="text-[rgba(238,115,145,1)]">La Realidad Golpea</p>
              <div className="mt-2 flex items-center">
                <div className="bg-[rgba(238,115,145,1)] w-[25%] h-3 rounded-l-full"></div>
                <div className="bg-white w-[75%] h-3 rounded-r-full"></div>
                <span className="ml-2 text-[rgba(238,115,145,1)]">25%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </MobileAppLayout>
  );
};

export default WorkTravelEpisodes;
