"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNavbar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/app/users"
        className={cn([
          "text-sm font-medium transition-colors hover:text-primary",
          !isActive("/app/users") && "text-muted-foreground",
        ])}
      >
        Usuários
      </Link>
      <Link
        href="/app/settings"
        className={cn([
          "text-sm font-medium transition-colors hover:text-primary",
          !isActive("/app/settings") && "text-muted-foreground",
        ])}
      >
        Configurações
      </Link>
      {/* <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link> */}
    </nav>
  );
}

export default MainNavbar;
