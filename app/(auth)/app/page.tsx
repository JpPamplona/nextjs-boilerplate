import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { auth, signOut } from "@/services/auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const session = await auth();

  return (
    <>
      <Avatar>
        <AvatarImage src={session?.user?.image || ""} />
        <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
      </Avatar>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <pre>{JSON.stringify(session?.user, null, 1)}</pre>
        <Button>Sair da conta</Button>
      </form>
    </>
  );
}
