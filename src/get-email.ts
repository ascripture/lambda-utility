import { AWSEvent } from "./aws-event";

export function getEmail(event: AWSEvent) {
    return event?.requestContext?.authorizer?.claims?.email;
  }