import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ModalForm from "../components/Modal";
import { useDispatch } from "react-redux";
import { addMessage } from '../actions'

const AddMessage = ({username}) => {
  let input;
  const dispatch = useDispatch();

  return (
    <section className="flex space-x-4">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (input.value || input.value.trim()) {
              dispatch(addMessage(input.value, username));
              
            }
            input.value = "";
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
        className="p-2 w-full rounded-md border border-black"
      />
      <button
        className="bg-blue-500 text-white flex items-center justify-center p-2 rounded-md"
        onClick={() => {
          if (input.value || input.value.trim()) {
            dispatch(addMessage(input.value, username));
            // const messages = JSON.parse(localStorage.getItem("messages")) || [];
            // localStorage.setItem(
            //   "messages",
            //   JSON.stringify([
            //     ...messages,
            //     {
            //       message: input.value,
            //       author: "Me",
            //       id: 0,
            //     },
            //   ])
            // );
          }

          input.value = "";
        }}
      >
        {" "}
        Send{" "}
      </button>
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
