import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author }) => {
  const mine = author.toLowerCase() === 'me'
  return (
  <span className={ mine ? "self-end bg-blue-500 text-white p-3 text-sm rounded-md w-16 w-[45%]" : " bg-blue-500 text-white p-3 text-sm rounded-md w-16 w-[45%]"}>
    {!mine && <span className="text-xs italics pb-3 block">{author} :</span> }
     <span className="text-sm font-medium">{message}</span>
  </span>
  )
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message