import { APIGatewayProxyResultV2 } from "aws-lambda";
import hello from "./hello.html";

export async function handler(): Promise<APIGatewayProxyResultV2> {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: hello,
  };
}
