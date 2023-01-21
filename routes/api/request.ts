import { HandlerContext } from "$fresh/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

type DbRequest = {
  firstName: string;
  lastName: string;
  type: string;
  phone: string;
  email: string;
};

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const newRequest = (await _req.json()) as DbRequest;

    const client = new SmtpClient();
    const { SEND_EMAIL, PASSWORD, RECV_EMAIL } = Deno.env.toObject();
    const connectConfig = {
      hostname: "smtp.gmail.com",
      port: 465,
      username: SEND_EMAIL,
      password: PASSWORD,
    };
    await client.connectTLS(connectConfig);
    await client.send({
      from: SEND_EMAIL,
      to: RECV_EMAIL,
      subject: "Новая заявка с сайта alekcey0211-tai-master.deno.dev",
      content: Object.values(newRequest).join("<br />"),
    });
    await client.close();

    return new Response(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error)
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
