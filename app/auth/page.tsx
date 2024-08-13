import Link from "next/link";
import { AuthForm } from "./_components/auth-form";

export default function AuthPage() {
  return (
    <main className="flex items-center justify-center flex-col h-screen">
      <AuthForm />
      <p>
        ou{" "}
        <Link href="/" className="link">
          clique aqui
        </Link>{" "}
        para retornar para a página inicial.
      </p>
    </main>
  );
}
