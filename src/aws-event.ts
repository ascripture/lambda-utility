export interface AWSEvent {
  body: unknown | string;
  requestContext?: {
    authorizer?: {
      claims?: {
        sub: string;
      };
    };
  };
}
