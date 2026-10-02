import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/dist/client/link";
import React from "react";
import ModeToggle from "./mode-toggle";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-fulll max-w-xs gap-1">
                <ModeToggle />
                <Button variant="ghost">
                    <Link
                        href="/cart"
                        className="flex flex-row items-center gap-1.5">
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button>
                    <Link
                        href="/sign-in"
                        className="flex flex-row items-center gap-1.5">
                        <UserIcon /> Sign In
                    </Link>
                </Button>
            </nav>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger className="align-middle">
                        <EllipsisVertical />
                    </SheetTrigger>
                    <SheetContent className="flex flex-col items-start p-5">
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle />
                        <Button variant="ghost">
                            <Link
                                href="/cart"
                                className="flex flex-row items-center gap-1.5">
                                <ShoppingCart /> Cart
                            </Link>
                        </Button>
                        <Button>
                            <Link
                                href="/sign-in"
                                className="flex flex-row items-center gap-1.5">
                                <UserIcon /> Sign In
                            </Link>
                        </Button>
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );
};

export default Menu;
