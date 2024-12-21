import type { NextApiRequest, NextApiResponse } from "next";

// biome-ignore lint/style/noDefaultExport: <explanation>
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request

    res.status(200).json({ message: "Webhook received successfully" });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Method not allowed" });
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};
