import twilio from 'twilio'

export let twilioClient

export const twilioSetup = async (addToConsole) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID
  const authToken = process.env.TWILIO_AUTH_TOKEN

  twilioClient = await twilio(accountSid, authToken)

  // addToConsole('Connected to Twilio.')
}
