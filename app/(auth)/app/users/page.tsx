import {
  MainPage,
  MainPageHeader,
  MainPageHeaderNav,
  MainPageHeaderTitle,
  MainPageMain,
} from "@/app/(auth)/_components/main-page-layout";
import UsersDataTable from "./_components/users-table";

function UsersPage() {
  console.log("Teste");
  return (
    <MainPage>
      <MainPageHeader>
        <MainPageHeaderTitle>Usuários</MainPageHeaderTitle>
      </MainPageHeader>
      <MainPageMain>
        <UsersDataTable></UsersDataTable>
      </MainPageMain>
    </MainPage>
  );
}

export default UsersPage;
