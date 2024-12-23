export async function POST(request: Request) {
  try {
    const text = await request.text();
    JSON.parse(text);

    return Response.json({ message: "Webhook received successfully" });
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error}`, {
      status: 400
    });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const owner = searchParams.get("owner");
  const repo = searchParams.get("repo");

  if (!(owner && repo)) {
    return new Response("Missing owner or repo", {
      status: 400
    });
  }

  return Response.json({});
}

export const config = {
  api: {
    bodyParser: false
  }
};
