import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const Notification = ({ message }) => {

  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {message}
    </div>
  )
}

Notification.protoTypes = {
  message: PropTypes.string
}

export default Notification

