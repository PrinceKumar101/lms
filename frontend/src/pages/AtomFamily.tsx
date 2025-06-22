import { useRecoilValue, useSetRecoilState } from "recoil";
import { memo } from "react";
import { NavBarCount } from "../store/atoms/notification";

const NavIcon = ({ label, index }) => {
  return <div key={index}> {label}</div>;
};

const NavBadge = ({ children, label }) => {
  const labelValue = useRecoilValue(NavBarCount(label));
  return (
    <>
      <div className="flex flex-row gap-3 ">
        {children}

        <span>{labelValue}</span>
      </div>
    </>
  );
};

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      badgeNedded: false,
    },
    {
      name: "Notification",
      badgeNedded: true,
      label: "notificationCount",
    },
    {
      name: "Message",
      badgeNedded: true,
      label: "messageCount",
    },
    {
      name: "About",
      badgeNedded: false,
    },
  ];

  return (
    <>
      <div className="flex flex-row gap-5 ">
        {menu.map((items, index) => {
          return items.badgeNedded ? (
            <NavBadge key={index} label={items.label}>
              <NavIcon label={items.name} index={index} />
            </NavBadge>
          ) : (
            <NavIcon key={index} label={items.name} index={index} />
          );
        })}
      </div>
    </>
  );
};

const NavStateChange = ({ label, name }) => {
  const setstate = useSetRecoilState(NavBarCount(label));
  console.log(`Rendering Button: ${name}`);
  return (
    <button
      onClick={() => setstate((c) => c + 1)}
      className="p-2 bg-white/10 rounded"
    >
      Increase {name}
    </button>
  );
};
const ButtonsChange = () => {
    const Memo1 = memo(NavStateChange);
    const Memo2 = memo(NavStateChange);
  return (
    <>
      <div className="flex flex-row gap-5 mt-5">
        <Memo1 label={"messageCount"} name={"Message"}/>
        <Memo2 label={"notificationCount"} name={"Notification"} />
      </div>
    </>
  );
};

const AtomFamilyUsage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <ButtonsChange/>
      
      {/* <div className="flex flex-row gap-5 mt-5">
          <NavStateChange label={"messageCount"} name={"Message"} />
          <NavStateChange label={"notificationCount"} name={"Notification"} />
      </div> */}
    </>
  );
};
export default AtomFamilyUsage;
