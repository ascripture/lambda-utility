import { AWSEvent } from "./aws-event";

export function getUserId(event: AWSEvent): string | undefined {
  return event?.requestContext?.authorizer?.claims?.sub;
}
