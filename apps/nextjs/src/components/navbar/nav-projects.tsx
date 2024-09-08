import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { MoreHorizontal, PlusSquare } from "lucide-react";

import { cn } from "@amaxa/ui";
import { Button } from "@amaxa/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@amaxa/ui/dropdown-menu";

export function NavProjects({
  projects,
  className,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {projects.map((item) => (
        <li
          key={item.name}
          className="group relative rounded-md hover:bg-accent hover:text-accent-foreground has-[[data-state=open]]:bg-accent has-[[data-state=open]]:text-accent-foreground"
        >
          <Link
            href={item.url}
            className="flex h-7 items-center gap-2.5 overflow-hidden rounded-md px-1.5 text-xs outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
          >
            <item.icon className="h-4 w-4 shrink-0 translate-x-0.5 text-muted-foreground" />
            <div className="line-clamp-1 grow overflow-hidden pr-6 font-medium">
              {item.name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}