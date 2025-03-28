
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import { Card } from "@/components/ui/card";

const Seasons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileAppLayout>
      {/* Header */}
      <div className="bg-[rgba(238,115,145,1)] w-full flex items-center p-4 text-white">
        <button onClick={() => navigate("/index")} className="mr-4">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-medium">Explorar temporadas</h1>
        <div className="ml-auto">
          <img
            src="/lovable-uploads/167c952f-acd4-4e60-ad46-80c6553405d7.png"
            alt="User avatar with pink hair"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex justify-between gap-2 w-full px-4 mt-4">
        <button className="bg-[rgba(238,115,145,1)] text-white px-4 py-2 rounded-full text-sm font-medium">
          Ahorro
        </button>
        <button className="bg-[rgba(238,115,145,1)] text-white px-4 py-2 rounded-full text-sm font-medium">
          Inversiones
        </button>
        <button className="bg-[rgba(238,115,145,1)] text-white px-4 py-2 rounded-full text-sm font-medium">
          Tarjetas
        </button>
      </div>

      {/* Season Cards */}
      <div className="flex flex-col gap-4 w-full px-4 mt-6 pb-8">
        {/* Card 1 - Work & Travel */}
        <Card 
          className="overflow-hidden rounded-xl relative cursor-pointer"
          onClick={() => navigate("/work-travel-episodes")}
        >
          <img
            src="/lovable-uploads/ba98b430-06c8-4475-b685-f03dbd8e4899.png"
            alt="Traveler at airport with airplane view"
            className="w-full h-40 object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-lg">
              Ahorro para Work & Travel
            </h3>
          </div>
        </Card>

        {/* Card 2 - First Bank Account */}
        <Card className="overflow-hidden rounded-xl relative">
          <img
            src="/lovable-uploads/96334ff8-291e-4406-9ad3-83238cc2d626.png"
            alt="Person at bank counter with bank employee"
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-0 left-0 p-3 text-white bg-[rgba(0,0,0,0.5)] rounded-br-lg font-bold text-lg">
            BANK
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-lg">
              Abrir mi primera cuenta bancaria
            </h3>
          </div>
        </Card>

        {/* Card 3 - Investment */}
        <Card className="overflow-hidden rounded-xl relative bg-black">
          <img
            src="/lovable-uploads/45996cb4-940f-42a8-b06e-479c1ed555f4.png"
            alt="Three colored lion heads representing investments"
            className="w-full h-40 object-cover opacity-80"
          />
          <div className="absolute top-3 left-3 bg-black rounded-full p-2">
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
              <div className="w-0 h-0 border-t-4 border-t-transparent border-l-8 border-l-black border-b-4 border-b-transparent ml-1"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-lg">
              Invertir sin saber de economía
            </h3>
          </div>
        </Card>

        {/* Card 4 - Finances after salary */}
        <Card className="overflow-hidden rounded-xl relative">
          <img
            src="/lovable-uploads/72b3d3de-3a51-49ad-8e6f-c50f95935e43.png"
            alt="Gandhi with followers walking"
            className="w-full h-40 object-cover"
          />
          <div className="absolute top-3 left-3 bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-800">
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h3 className="text-xl font-bold drop-shadow-lg">
              Organizar mis finanzas después del sueldo
            </h3>
          </div>
        </Card>
      </div>
    </MobileAppLayout>
  );
};

export default Seasons;
