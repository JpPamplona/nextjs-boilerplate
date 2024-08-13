"use server";

import { auth } from "@/services/auth";
import { prisma } from "@/services/database";
import { z } from "zod";
import { updateProfileSchema } from "./schema";

export async function updateProfile(
  input: z.infer<typeof updateProfileSchema>
) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Not authorized",
      data: null,
    };
  }

  await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      name: input.name,
    },
  });
}

export async function deleteProfile() {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "Not authorized",
      data: null,
    };
  }

  await prisma.user.delete({
    where: {
      id: session?.user?.id,
    },
  });

  return {
    error: null,
    data: "User deleted successfully",
  };
}
