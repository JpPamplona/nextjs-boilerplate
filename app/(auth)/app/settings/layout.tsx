import { PropsWithChildren } from "react";
import { auth } from "@/services/auth";
import {
  MainPage,
  MainPageHeader,
  MainPageHeaderTitle,
  MainPageMain,
} from "../../_components/main-page-layout";
import { SettingsSidebar } from "./_components/settings-sidebar";

export default async function SettingsLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Configurações</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>
        <div className="container max-w-screen-lg">
          <div className="grid grid-cols-[16rem_1fr] gap-12">
            <SettingsSidebar />
            <div>{children}</div>
          </div>
        </div>
      </MainPageMain>
    </MainPage>
  );
}
