import { Button } from "@/components/ui/button";
import Link from "next/link";

function HomePage() {
  return (
    <main className="h-screen flex items-center align-middle justify-center">
      <h1>Home</h1>
      <Link href={"/auth"}>
        <Button>Fazer login</Button>
      </Link>
    </main>
  );
}

export default HomePage;
