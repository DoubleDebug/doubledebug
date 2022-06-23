import emailjs from '@emailjs/browser';

export async function sendEmail(
  event: React.FormEvent<HTMLDivElement>
): Promise<ResponseStatus> {
  event.preventDefault();

  const config = {
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
  };
  if (!config.PUBLIC_KEY || !config.SERVICE_ID || !config.TEMPLATE_ID) {
    return {
      success: false,
      message: 'There was an error while connecting to the email service.',
    };
  }

  let error;
  const response = await emailjs
    .sendForm(
      config.SERVICE_ID,
      config.TEMPLATE_ID,
      event.target as HTMLFormElement,
      config.PUBLIC_KEY
    )
    .catch((reason) => {
      error = reason;
    });

  if (response) {
    return {
      success: true,
    };
  }

  return {
    success: false,
    message: JSON.stringify(error),
  };
}
