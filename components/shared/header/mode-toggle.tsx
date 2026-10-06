"use client";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, SunMoon } from "lucide-react";

const ModeToggle = () => {
    
    const mounted = useSyncExternalStore(
        () => () => {},
        () => true,
        () => false,
    );
    const { theme, setTheme } = useTheme();

    if (!mounted) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        className="focus-visible:ring-0 focus-visible:ring-offset-0"
                        aria-label="Change theme"
                    />
                }>
                {theme === "system" ? (
                    <SunMoon />
                ) : theme === "light" ? (
                    <Sun />
                ) : (
                    <Moon />
                )}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Theme</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                        checked={theme === "system"}
                        onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={theme === "light"}
                        onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                        checked={theme === "dark"}
                        onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuCheckboxItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ModeToggle;
