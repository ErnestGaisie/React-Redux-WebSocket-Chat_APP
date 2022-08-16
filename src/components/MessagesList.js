import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import PullToRefresh from "react-simple-pull-to-refresh";

const MessagesList = ({ messages }) => {
  // const mine = author.toLowerCase() === 'me'

  return (
    <section id="messages-list">
      <PullToRefresh>
        <ul className="flex flex-col space-y-3 py-4">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </ul>
      </PullToRefresh>
    </section>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessagesList;
