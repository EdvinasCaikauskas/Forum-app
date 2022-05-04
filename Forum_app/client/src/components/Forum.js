import React from "react";
import moment from "moment";
import { FaLocationArrow, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/Forum";
import ForumInfo from "./ForumInfo";

const Forum = ({ _id, content, topic, forumLocation, createdAt }) => {
  const { deleteForum } = useAppContext();

  let date = moment(createdAt);
  date = date.format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{topic.charAt(0)}</div>
        <div className="info">
          <h5>{topic}</h5>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ForumInfo icon={<FaLocationArrow />} text={forumLocation} />
          <ForumInfo icon={<FaCalendarAlt />} text={date} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Forum;
