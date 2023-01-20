import { HandlerContext } from "$fresh/server.ts";
import { getJson } from "../../shared/file.ts";

type DbRequest = {
  firstName: string;
  lastName: string;
  type: string;
  phone: string;
  email: string;
};

export const handler = async (_req: Request, _ctx: HandlerContext) => {
  try {
    const requestsPath = "./db/requests.json";

    const newRequest = (await _req.json()) as DbRequest;
    const data = (await getJson(requestsPath)) as DbRequest[];

    return new Response(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
