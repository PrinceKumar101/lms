import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { NavBarBadgeCount } from "../store/atoms/notification";

const Navbar = () => {
  return (
    <>
    <RenderIcons/>
      <div className="flex flex-row gap-6 ">
        <UpdateConnectionCount />
        <UpdateMessageCount />
        <UpdateNotificationCount />
      </div>
    </>
  );
};
export default Navbar;

const RenderIcons = () => {
  const badgeCount = useRecoilValue(NavBarBadgeCount);

  const menu = [
    {
      name: "Home",
      link: "/",
      needBadge: false,
    },
    {
      name: "About",
      link: "/about",
      needBadge: false,
    },
    {
      name: "Message",
      link: "/messages",
      needBadge: true,
      notificationCount: badgeCount.messageCount,
    },
    {
      name: "Notification",
      link: "/notification",
      needBadge: true,
      notificationCount: badgeCount.notificationCount,
    },
    {
      name: "Connection",
      link: "/connection",
      needBadge: true,
      notificationCount: badgeCount.connections,
    },
  ];

  return (

    <div className="flex flex-row gap-7 text-xl">
    {menu.map((items, index) => {
      return (
        <>
          <NavIcon {...items} index={index} />
        </>
      );
    })}
  </div>
)
};

const BadgeIcon = ({ count }) => {
  return (
    <>
      <span className="">{count}</span>
    </>
  );
};

const NavIcon = (props) => {
  return (
    <>
      <div key={props.index} className="flex flex-row gap-5">
        <h1>
          <a href={props.link}>{props.name}</a>
        </h1>
        <div className="">
          {props.needBadge && <BadgeIcon count={props.notificationCount} />}
        </div>
      </div>
    </>
  );
};

const UpdateMessageCount = () => {
  const setBadgeState = useSetRecoilState(NavBarBadgeCount);

  const incrementMessage = () => {
    setBadgeState((prevState) => ({
      ...prevState,
      messageCount: prevState.messageCount + 1,
    }));
  };

  return <button onClick={incrementMessage}>Increase Message Count</button>;
};
const UpdateNotificationCount = () => {
  const setBadgeState = useSetRecoilState(NavBarBadgeCount);

  const incrementMessage = () => {
    setBadgeState((prevState) => ({
      ...prevState,
      notificationCount: prevState.notificationCount + 1,
    }));
  };

  return (
    <button onClick={incrementMessage}>Increase Notification Count</button>
  );
};
const UpdateConnectionCount = () => {
  const setBadgeState = useSetRecoilState(NavBarBadgeCount);

  const incrementMessage = () => {
    setBadgeState((prevState) => ({
      ...prevState,
      connections: prevState.connections + 1,
    }));
  };

  return <button onClick={incrementMessage}>Increase Connection Count</button>;
};
