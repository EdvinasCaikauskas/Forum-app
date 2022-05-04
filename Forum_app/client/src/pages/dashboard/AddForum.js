import React from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const AddForum = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    content,
    topic,
    forumLocation,
    handleChange,
    clearValues,
    createForum,
  } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !topic || !forumLocation) {
      displayAlert();
      return;
    }
    if (isEditing) {
      return;
    }
    createForum();
  };
  const handleForumInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit forum" : "add forum"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* topic */}
          <FormRow
            type="text"
            name="topic"
            value={topic}
            handleChange={handleForumInput}
          />
          {/* content */}
          <FormRow
            type="text"
            name="content"
            value={content}
            handleChange={handleForumInput}
          />
          {/* location */}
          <FormRow
            type="text"
            name="forumLocation"
            labelText="user location"
            value={forumLocation}
            handleChange={handleForumInput}
          />
          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddForum;
