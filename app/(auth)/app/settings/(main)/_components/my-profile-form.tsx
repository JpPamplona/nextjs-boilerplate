"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { updateProfileSchema } from "../schema";
import { toast } from "@/components/ui/use-toast";
import { updateProfile } from "../actions";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProfileFormProps = {
  defaultValues: Session["user"] | undefined;
};

export function MyProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      email: defaultValues?.email ?? "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data);
    router.refresh();

    toast({
      title: "Success",
      description: "Your content has been updated successfully.",
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Nome</CardTitle>
            <CardDescription>Este é o nome do seu usuário</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entre com o nome do usuário"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>E-mail</CardTitle>
            <CardDescription>Este é o e-mail da sua conta</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      readOnly
                      placeholder="Entre com o e-mail do usuário"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Por favor envie um e-mail para o contato@demand.io para
                    solicitar a alteração do seu e-mail
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button disabled={form.formState.isLoading} type="submit">
          {form.formState.isLoading ? "Salvando.." : "Salvar alterações"}
        </Button>
      </form>
    </Form>
  );
}
