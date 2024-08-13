import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth, signOut } from "@/services/auth";
import { Button } from "@/components/ui/button";
import {
  MainPage,
  MainPageHeader,
  MainPageHeaderTitle,
  MainPageMain,
} from "../_components/main-page-layout";

export default async function Page() {
  const session = await auth();

  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Página Principal</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>Conteúdo</MainPageMain>
    </MainPage>
  );
}
