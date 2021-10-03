import { AWSEvent } from "./aws-event";

export function getRequestBody(event: AWSEvent) {
  return typeof event.body === "object" && event.body !== null
    ? event.body
    : JSON.parse(event.body as string);
}
