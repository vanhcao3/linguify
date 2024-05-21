import { Resend } from "resend";
import { type EmailProps } from "@/types/types";
import { z } from "zod";
import { InviteEmail } from "@/components/email-template";
import { type ErrorResponse } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSchema = z.object({
  recipient: z.string(),
  link: z.string(),
  recipientUsername: z.string(),
  senderImage: z.string(),
  invitedByUsername: z.string(),
  invitedByEmail: z.string(),
});

export async function POST(req: Request) {
  const json: EmailProps = (await req.json()) as EmailProps;
  const body = emailSchema.parse(json);

  try {
    const { error } = await resend.emails.send({
      from: `<Linguify> support@linguify.fun`,
      to: body.recipient,
      subject: "Invitation to join call on Linguify",
      react: InviteEmail({
        recipientUsername: body.recipientUsername,
        senderImage: body.senderImage,
        invitedByUsername: body.invitedByUsername,
        invitedByEmail: body.invitedByEmail,
        inviteLink: body.link,
      }),
      text: "Invitation to join call on Linguify",
    });

    if (error) {
      console.log(error);
      return new Response(error.message, { status: 500 });
    }

    return new Response(null, { status: 200 });
  } catch (error) {
    const resendError = error as ErrorResponse;

    if (resendError?.message) {
      return new Response(resendError?.message, { status: 429 });
    }

    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response("Something went wrong", { status: 500 });
  }
}
