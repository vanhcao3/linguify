import Menu from '../Menu/menu';

interface props {
  courses: any;
}

function MyCourseButton({ courses }: props) {
  return (
    <Menu
      title="Khoá học của tôi"
      btnTitle="Xem tất cả"
      href="/me/myCourses"
      type="course"
      items={courses}
    >
      <div>
        <button className="font-semibold">Khoá học của tôi</button>
      </div>
    </Menu>
  );
}

export default MyCourseButton;
