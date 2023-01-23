import { HandlerContext } from "$fresh/server.ts";
import * as google from "https://googleapis.deno.dev/v1/sheets:v4.ts";
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
    const newRequest = (await _req.json()) as DbRequest;

    const googleKeys = await getJson("tai-ms-db-610c215eb4cf.json");
    const spreadSheetId = "1DSI7mx-L5pEVEejqPyY2Ui8QPl-J6uoIQQQtSaec2u4";
    const auth = new google.GoogleAuth();
    const client = auth.fromJSON(googleKeys);
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
