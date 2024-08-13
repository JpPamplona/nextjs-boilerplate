import { auth } from "@/services/auth";
import { prisma } from "@/services/database";

export async function getAllUsers() {
  // const session = await auth();
  const users = await prisma.user.findMany();
  return users;
}
