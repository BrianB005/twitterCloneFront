import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";

import {
  BsBookmark,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";

export const sidebarLinks = [
  {
    id: 1,
    text: "Home",
    icon: <AiFillHome />,
    url: "/",
  },
  {
    id: 2,
    text: "Search",
    icon: <AiOutlineSearch />,
    url: "/search",
  },
  {
    id: 7,
    text: "Alerts",
    icon: <GrNotification />,
    url: "/notifications",
  },
  {
    id: 3,
    text: "Friends +",
    icon: <BsFillPersonPlusFill />,
    url: "/searchFriends",
  },
  {
    id: 4,
    text: "Bookmark",
    icon: <BsBookmark />,
    url: "/bookmark",
  },
  {
    id: 5,
    text: "Account",
    icon: <BsFillPersonFill />,
    url: "/profile",
  },
];
