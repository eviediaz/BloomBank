import React from "react";

interface UserGreetingProps {
  name: string;
  avatarUrl: string;
}

const UserGreeting: React.FC<UserGreetingProps> = ({ name, avatarUrl }) => {
  return (
    <section className="flex w-full max-w-[349px] items-stretch gap-5 text-[32px] text-white font-normal leading-[0] justify-between mt-4">
      <h1 className="mt-[30px]">Hola, {name}</h1>
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="aspect-[1.12] object-contain w-[67px] shrink-0"
      />
    </section>
  );
};

export default UserGreeting;
