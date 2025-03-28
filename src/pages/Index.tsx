
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [readmeContent, setReadmeContent] = useState<string[]>([
    "# Blank Project",
    "",
    "This is a blank project template created with Lovable.",
    "",
    "## Getting Started",
    "",
    "1. Clone this repository",
    "2. Run `npm install` to install dependencies",
    "3. Run `npm run dev` to start the development server",
    "4. Open your browser to http://localhost:8080",
    "",
    "## Project Structure",
    "",
    "The project has a minimal structure with just the essential files to get started.",
    "",
    "## Features",
    "",
    "- React",
    "- TypeScript",
    "- Tailwind CSS",
    "- Shadcn UI components (available but not used)"
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="prose dark:prose-invert max-w-none">
          {readmeContent.map((line, index) => {
            if (line.startsWith("# ")) {
              return <h1 key={index} className="text-3xl font-bold mt-6 mb-4">{line.substring(2)}</h1>;
            } else if (line.startsWith("## ")) {
              return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
            } else if (line.startsWith("- ")) {
              return <li key={index} className="ml-6 my-1">{line.substring(2)}</li>;
            } else if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || line.startsWith("4. ")) {
              return <li key={index} className="ml-8 my-1 list-decimal">{line.substring(3)}</li>;
            } else if (line === "") {
              return <div key={index} className="my-2"></div>;
            } else {
              return <p key={index} className="my-2">{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
