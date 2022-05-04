import React from "react";
import { useAppContext } from "../context/appContext";
import { useEffect } from "react";
import Loading from "./Loading";
import Forum from "./Forum";
import Wrapper from "../assets/wrappers/ForumsContainer";

const ForumsContainer = () => {
  const { getForums, forums, isLoading, page, totalForums } = useAppContext();
  useEffect(() => {
    getForums();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  if (forums.lenght === 0) {
    return (
      <Wrapper>
        <h2>No forums to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>
        {totalForums} forum{forums.length > 1 && "s"}
      </h5>
      <div className="forums">
        {forums.map((forum) => {
          return <Forum key={forum._id} {...forum} />;
        })}
      </div>
      {/* pagination buttons */}
    </Wrapper>
  );
};

export default ForumsContainer;
