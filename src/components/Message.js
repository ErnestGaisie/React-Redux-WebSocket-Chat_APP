import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author }) => {
  const mine = author.toLowerCase() === 'me'
  return (
  <span className="bg-blue-500 text-white p-3 text-sm rounded-md w-16">
    {!mine && <i>{author} :</i> }
     {message}
  </span>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message