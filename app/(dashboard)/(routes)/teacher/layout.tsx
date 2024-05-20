import {RoleGate} from '@/components/role-gate'
import { UserRole } from '@prisma/client';

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
    return (
        <RoleGate allowedRole={UserRole.ADMIN}><div>{children}</div></RoleGate>
    );
  }