import {Credentials, DynamoDB} from 'aws-sdk';

export const dynamoClient = new DynamoDB({
  ...(process.env.JEST_WORKER_ID && {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
    credentials: new Credentials('null', 'null'),
  }),
});

export const dynamoDocumentClient = new DynamoDB.DocumentClient({
  ...(process.env.JEST_WORKER_ID && {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
    credentials: new Credentials('null', 'null'),
  }),
});
