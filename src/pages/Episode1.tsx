
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Episode1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileAppLayout>
      <div className="flex flex-col w-full h-full min-h-screen bg-[#F26A8D]">
        {/* Header */}
        <div className="bg-[#F26A8D] w-full flex items-center p-4 text-white">
          <button onClick={() => navigate("/work-travel-episodes")} className="mr-2">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-pink-300 rounded-full overflow-hidden mr-2">
              <img
                src="/lovable-uploads/0bd13447-95c6-4638-842f-52a0510c0013.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-medium">Episodio 1</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="bg-yellow-400 rounded-full px-3 py-1 flex items-center">
              <span className="text-white font-bold">🔥 930</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 mt-2 mb-4">
          <div className="bg-pink-300 w-full h-5 rounded-full">
            <div className="bg-pink-400 w-[25%] h-5 rounded-full"></div>
          </div>
          <div className="flex justify-end mt-1">
            <span className="text-white font-bold">❤️ 5</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col px-4 gap-4 pb-20">
          {/* Message Bubble */}
          <div className="bg-white p-4 rounded-3xl shadow-md">
            <p className="text-gray-800">
              "¡Por fin! Después de un año de espera, Sofía ha recibido su visa para el Work & Travel."
            </p>
          </div>

          {/* Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/187fab58-afbb-4c5d-8835-686d11fc8d10.png"
              alt="Woman with passport at airport"
              className="w-full h-auto"
            />
          </div>

          {/* Character message */}
          <div className="flex mt-2">
            <div className="ml-2 bg-white p-3 rounded-2xl shadow-md self-start flex items-start">
              <p className="text-gray-800">Pero hay un problema...</p>
            </div>
            <img
              src="/lovable-uploads/9de302fa-6a6b-4cda-a09f-42e7836a0d27.png"
              alt="Hamster character"
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>

        {/* Continue Button */}
        <div className="fixed bottom-0 left-0 right-0 p-5 bg-[#F6C1D3]">
          <Button className="w-full bg-[#F26A8D] hover:bg-[#e05a7d] text-white py-5 rounded-full font-bold text-lg h-auto">
            Continuar
          </Button>
        </div>
      </div>
    </MobileAppLayout>
  );
};

export default Episode1;
