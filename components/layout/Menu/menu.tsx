import HeadlessTippy from '@tippyjs/react/headless';
import Course from './course';
import Notification from './notification';
import Avatar from './avatar';
import SidebarMenu from './sidebarMenu';
import { User, UserRole } from '@prisma/client';

interface IProps {
  children: React.ReactNode;
  title: string | null;
  btnTitle: string | null;
  type: string;
  items: Array<any>;
  href?: string;
}

function Menu(props: IProps) {
  const { children, type, title, btnTitle, items, href } = props;

  const renderResult = () => {
    if (type === 'course') {
      return (
        <div>
          <Course title={title} btnTitle={btnTitle} href={href} items={items} />
        </div>
      );
    }
    if (type === 'notification') {
      return (
        <div>
          <Notification title={title} btnTitle={btnTitle} items={items} />
        </div>
      );
    }
    if (type === 'avatar') {
      return (
        <div>
          <Avatar items={items} />
        </div>
      );
    }

    if (type === 'sidebarMenu') {
      return (
        <div>
          <SidebarMenu items={items} />
        </div>
      );
    }

    return <div>Nothing here!!!</div>;
  };

  return (
    <div>
      <HeadlessTippy
        trigger={type === 'search' ? '' : 'click'}
        interactive={true}
        placement="bottom-end"
        render={renderResult}
      >
        <div>{children}</div>
      </HeadlessTippy>
    </div>
  );
}

export default Menu;
