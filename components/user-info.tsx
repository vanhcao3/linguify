import { ExtendedUser } from '@/next-auth'
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface UserInfoProps {
    user?: ExtendedUser;
    label: string;
    numberOfCourseCompleted: number;
    numberOfCourseInProgress: number;
};

export const UserInfo = ({
    user,
    label,
    numberOfCourseCompleted,
    numberOfCourseInProgress,
}: UserInfoProps) => {
    return (
        <Card className='w-[600px] shadow-md'>
            <CardHeader>
                <p className='text-2xl font-semibold text-center'>
                    {label}
                </p>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                    <p className='text-sm font-medium'>
                        Name
                    </p>
                    <p className='truncate text-md max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>
                        {user?.name}
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                    <p className='text-sm font-medium'>
                        Email
                    </p>
                    <p className='truncate text-md max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>
                        {user?.email}
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                    <p className='text-sm font-medium'>
                        Account
                    </p>
                    <p className='truncate text-md max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>
                        {user?.role === "ADMIN" ? 'TEACHER' : 'STUDENT'}
                    </p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                    <p className='text-sm font-medium'>
                        Two Factor Authentification
                    </p>
                    <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
                        {user?.isTwoFactorEnabled ? 'ON' : 'OFF'}
                    </Badge>
                </div>
                {user?.role !== 'ADMIN' && (
                <>
                    <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                        <p className='text-sm font-medium'>
                            Course Completed
                        </p>
                        <p className='truncate text-md max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>
                            {numberOfCourseCompleted ? numberOfCourseCompleted : '0'}
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                        <p className='text-sm font-medium'>
                            Course Enrolled
                        </p>
                        <p className='truncate text-md max-w-[180px] font-mono p-1 bg-slate-100 rounded-md'>
                            {numberOfCourseInProgress ? numberOfCourseInProgress : '0'}
                        </p>
                    </div>
                </>
                )}
            </CardContent>
        </Card>
        
    )
}
