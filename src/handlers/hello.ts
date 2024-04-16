import { Logger } from "@aws-lambda-powertools/logger";
import { APIGatewayProxyEvent } from "aws-lambda";
import { composeResponse } from "../utils/response";

const logger = new Logger({ serviceName: "Hello Handler" });

const someEnv = process.env.SOME_ENV || "";
export const handler = async (event: APIGatewayProxyEvent) => {
  logger.info("Received event", { event });
  return composeResponse(200, JSON.stringify({msg: 'Hello function run successfully'}));
};
