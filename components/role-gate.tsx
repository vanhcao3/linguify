"use client";

import {UserRole} from "@prisma/client"
import {useCurrentRole} from '@/hooks/use-current-role'
import {FormError} from '@/components/form-error'
import React from "react";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRole: UserRole;
};

export const RoleGate = ({
    children,
    allowedRole,
}: RoleGateProps) => {
    const role = useCurrentRole();

    if(role !== allowedRole) {
        return (
            <FormError message="Access denied: You do not have permission to view this page"/>
        )
    }

    return (
        <>
            {children}
        </>
    )
}