"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import classes from "./auth-form.module.css";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AuthForm() {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("nodemailer", { email: data.email, redirect: false });

      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    }
  });

  const handleSubmitGoogle = form.handleSubmit(async (data) => {
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    }
  });

  return (
    <Card className="mx-auto max-w-sm space-y-8">
      <CardHeader>
        <CardTitle>Bem-vindo de volta!</CardTitle>
        <CardDescription>
          Entre na sua conta utilizando um e-mail ou Google.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            placeholder="joao@exemplo.com"
            required
            type="email"
            {...form.register("email")}
          />
          <Button
            className="w-full"
            variant="secondary"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting
              ? "Carregando..."
              : "Entrar com e-mail"}
          </Button>
        </form>
        <Separator className={cn("my-7", classes.separator)}>
          <span>ou</span>
        </Separator>
        <form onSubmit={handleSubmitGoogle} className="space-y-4">
          <Button
            variant="secondary"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {/* <ChromeIcon className="mr-3 h-4 w-4" /> */}
            <Image
              src={`https://authjs.dev/img/providers/google.svg`}
              width={24}
              height={24}
              alt="Google logo"
            />
            <span className="flex-grow">
              {form.formState.isSubmitting
                ? "Carregando..."
                : "Entrar com o Google"}
            </span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
