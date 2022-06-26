import axios from 'axios'

interface SendMailProps {
  name: string
  senderMail: string
  content: string
}

export const sendContactMail = async (data: SendMailProps) => {
  try {
    return await axios.post('/api/contact', data)
  } catch (error) {
    return error
  }
}
