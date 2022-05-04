import { MdForum } from "react-icons/md";
import { BiMessageAdd } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "all forums", path: "/", icon: <MdForum /> },
  { id: 2, text: "add forum", path: "add-forum", icon: <BiMessageAdd /> },
  { id: 3, text: "profile", path: "profile", icon: <ImProfile /> },
];

export default links;
