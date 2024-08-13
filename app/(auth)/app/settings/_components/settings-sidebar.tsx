"use client";

import {
  SidebarNav,
  SidebarNavMain,
  SidebarNavLink,
} from "@/components/sidebar";
import { usePathname } from "next/navigation";

export function SettingsSidebar() {
  const pathName = usePathname();

  const isActive = (path: string) => {
    return pathName === path;
  };

  return (
    <aside>
      <SidebarNav>
        <SidebarNavMain>
          <SidebarNavLink
            active={isActive("/app/settings")}
            href="/app/settings"
          >
            Meu perfil
          </SidebarNavLink>
          <SidebarNavLink
            active={isActive("/app/settings/theme")}
            href="/app/settings/theme"
          >
            Tema
          </SidebarNavLink>
          {/* <SidebarNavLink
            active={isActive("/app/settings/billing")}
            href="/app/settings/billing"
          >
            Pagamento
          </SidebarNavLink> */}
        </SidebarNavMain>
      </SidebarNav>
    </aside>
  );
}
