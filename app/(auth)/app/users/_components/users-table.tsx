import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsers } from "../actions";

export default async function UsersDataTable() {
  const users = await getAllUsers();

  return (
    <Table>
      <TableCaption>Lista de usuários da plataforma</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Verificado em</TableHead>
          <TableHead>Criado em</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.emailVerified?.toLocaleString()}</TableCell>
            <TableCell>{user.createdAt?.toLocaleString()}</TableCell>
            <TableCell>????</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total de usuários</TableCell>
          <TableCell className="text-right">{users.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
