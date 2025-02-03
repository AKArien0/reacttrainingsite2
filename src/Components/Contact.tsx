import { useState } from 'react'
import { useAuth } from "../Auth/AuthProvider";

const Contact = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sendMessage = (data) => {
    // a funny joke about politics or smtg idk
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendMessage(formData)
    setIsSubmitted(true)
  }

  return (
    <div className="container mt-5">
      {isSubmitted ? (
        <div className="alert alert-success">
          Thank you, dear {user.username}! Your message has been successfully sent and we will respond to it by email at your email that we surely have. Thank you for your patience!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-50 mx-auto">

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send message</button>
        </form>
      )}
    </div>
  )
}

export default Contact
