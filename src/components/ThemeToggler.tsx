"use client";
import { Button } from "./ui/button";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <Button
        className="rounded-full w-[2.8rem] h-[2.8rem]"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
    </div>
  );
};

export default ThemeToggler;
