import { getDashboardCourses } from '@/actions/get-dashboard-courses';
import { UserInfo } from '@/components/user-info'
import { currentUser } from '@/lib/auth'
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
    const user = await currentUser();

    if(!user) return redirect('/')

    const {completedCourses, coursesInProgress} = await getDashboardCourses(user?.id!);

    if(!completedCourses || !coursesInProgress) return redirect('/')

    return (
        <div className='flex items-center justify-center mt-10 mb-10'>
            <UserInfo
                label="Profile"
                user={user}
                numberOfCourseCompleted={completedCourses.length}
                numberOfCourseInProgress={coursesInProgress.length}
            />
        </div> 
    )
}

export default ProfilePage;