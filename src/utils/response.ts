import { APIGatewayProxyResult } from "aws-lambda";
import { corsHeaders } from "./constants";

export const composeResponse = (status: number, body?: string ):APIGatewayProxyResult => {
    return {
        statusCode: status,
        headers: corsHeaders,
        body: body || JSON.stringify({})
    }
}