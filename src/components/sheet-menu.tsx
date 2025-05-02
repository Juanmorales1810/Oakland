import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

interface SheetMenuProps {
    routes: { name: string; href: string }[];
    title: string;
    description?: string;
}

export function SheetMenu(props: SheetMenuProps) {
    const { routes, title, description } = props;
    const [open, setOpen] = useState(false);
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-white/80 border-white/50 backdrop-blur-sm shadow-lg dark:bg-zinc-900/50 dark:backdrop-blur-sm dark:shadow-lg">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                    <SheetDescription>{description}</SheetDescription>
                </SheetHeader>
                <nav aria-label="Global">
                    <ul className="flex flex-col items-start font-bold gap-6 text-xl ml-4">
                        {routes.map((route) => (
                            <li key={route.name}>
                                <a
                                    className="text-zinc-900 transition hover:text-zinc-900/75 font-semibold"
                                    href={route.href}
                                    onClick={() => setOpen(false)}
                                >
                                    {route.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
}
