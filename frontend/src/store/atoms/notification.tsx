import { atom, atomFamily } from "recoil";

export const NavBarBadgeCount = atom({
  key: "notificationCount",
  default: {
    messageCount: 0,
    notificationCount: 0,
    connections: 0,   
  },
});
 
 export const NavBarCount = atomFamily({
  key: "navbar atomfamily",
  default:0
});
