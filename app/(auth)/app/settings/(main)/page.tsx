import { auth } from "@/services/auth";
import { MyProfileForm } from "./_components/my-profile-form";

export default async function Page() {
  const session = await auth();

  return <MyProfileForm defaultValues={session?.user} />;
}
