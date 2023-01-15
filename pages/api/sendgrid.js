import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const content = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: "senan996@gmail.com",
      subject: `New message from ${name}`,
      text: message,
      html: `<div>
                <p><b>Nom: </b>${message}</p>
                <p><b>Email: </b>${email}</p>
                <p><b>Phone: </b>${phone}</p>
                <p><b>Message: </b>${message}</p>
            </div>`,
    };

    await sendgrid.send(content).then((res) => {
      res.status(200).json({ success: true });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};
