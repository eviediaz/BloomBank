
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileAppLayout from "@/components/home/MobileAppLayout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Episode2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MobileAppLayout>
      <div className="flex flex-col w-full h-full min-h-screen bg-[#F6A6BA]">
        {/* Header */}
        <div className="bg-[#F6A6BA] w-full flex items-center p-4 text-white">
          <button onClick={() => navigate("/episode1")} className="mr-2">
            <ArrowLeft className="h-6 w-6" color="white" />
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-pink-200">
              <img
                src="/lovable-uploads/63f220d0-e713-40ae-96d5-36c38c779c19.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-medium text-white">Episodio 1</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Avatar className="h-8 w-8 border-0">
                <AvatarImage src="/lovable-uploads/61e554a9-55ac-47b9-ac6d-ee8b1fe89e64.png" alt="Points" />
                <AvatarFallback>🔥</AvatarFallback>
              </Avatar>
              <span className="text-white font-bold">930</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-4 mt-2 mb-4">
          <div className="bg-pink-300 w-full h-5 rounded-full">
            <div className="bg-pink-200 w-[50%] h-5 rounded-full"></div>
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
              Sofía revisa sus cuentas... ha gastado sin control y ahora tiene que ahorrar como nunca.
            </p>
          </div>

          {/* Image */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="/lovable-uploads/8251a999-e572-4301-a16b-8e911de36855.png"
              alt="Woman with bills and expenses"
              className="w-full h-auto"
            />
          </div>

          {/* Character message */}
          <div className="flex mt-2">
            <div className="ml-2 bg-white p-3 rounded-2xl shadow-md self-start">
              <p className="text-gray-800">Oye, Sofi primero lo primero. ¿Sabes cuánto necesitas realmente para tu viaje?</p>
            </div>
            <img
              src="/lovable-uploads/9de302fa-6a6b-4cda-a09f-42e7836a0d27.png"
              alt="Hamster character"
              className="w-36 h-36 object-contain"
            />
          </div>
        </div>

        {/* Options */}
        <div className="fixed bottom-0 left-0 right-0 p-5 bg-[#F6C1D3]">
          <h2 className="text-white text-xl font-bold text-center mb-4">Elige una opción:</h2>
          <div className="grid grid-cols-3 gap-3">
            <Button className="bg-[#F26A8D] hover:bg-[#e05a7d] text-white py-4 rounded-full font-bold text-sm h-auto">
              No tengo idea, voy a sacar un aproximado
            </Button>
            <Button className="bg-[#F26A8D] hover:bg-[#e05a7d] text-white py-4 rounded-full font-bold text-sm h-auto">
              Sé más o menos cuanto, pero no he organizado mis gastos
            </Button>
            <Button className="bg-[#F26A8D] hover:bg-[#e05a7d] text-white py-4 rounded-full font-bold text-sm h-auto">
              Sí, lo tengo super claro
            </Button>
          </div>
        </div>
      </div>
    </MobileAppLayout>
  );
};

export default Episode2;
