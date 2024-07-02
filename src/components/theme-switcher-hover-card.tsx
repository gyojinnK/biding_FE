import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import ThemeSwitcher from "./theme-switcher";
import { LightBulbIcon } from "@heroicons/react/24/outline";

const ThemeSwitcherHoverCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="fixed bottom-4 right-4 rounded-full border border-primary bg-background">
          <ThemeSwitcher className=" p-2" />
        </div>
      </HoverCardTrigger>
      <HoverCardContent
        align="end"
        className="bg-background w-fit flex items-center gap-1"
      >
        <LightBulbIcon className="w-3 h-3" />
        <p className="text-xs">테마를 변경합니다. (light / dark)</p>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ThemeSwitcherHoverCard;
