import { HandlerContext } from "$fresh/server.ts";
import * as google from "https://googleapis.deno.dev/v1/sheets:v4.ts";
import { getJson } from "../../shared/file.ts";
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

    const { private_key } = await getJson("key.json");

    const spreadSheetId = "1DSI7mx-L5pEVEejqPyY2Ui8QPl-J6uoIQQQtSaec2u4";
    const auth = new google.GoogleAuth();
    const client = auth.fromJSON({
      type: Deno.env.get("type"),
      project_id: Deno.env.get("project_id"),
      private_key_id: Deno.env.get("private_key_id"),
      private_key,
      client_email: Deno.env.get("client_email"),
      client_id: Deno.env.get("client_id"),
    });
    const sheets = new google.Sheets(client);
    await sheets.spreadsheetsValuesAppend(
      "Заявки!A:F",
      spreadSheetId,
      {
        values: [
          [
            ...Object.values(newRequest),
            new Date(Date.now()).toLocaleDateString(),
          ],
        ],
      },
      { valueInputOption: "USER_ENTERED" }
    );

    return new Response(null, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(null, {
      status: 500,
      statusText: "Something went wrong",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
