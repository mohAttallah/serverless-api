import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { tableName } from './constants';

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handleCreate = async (data) => {
    try {
        await dynamo.send(
            new PutCommand({
                TableName: 'people',
                Item: {
                    id: data.id,
                    name: data.name,
                    age: data.age,
                },
            })
        );
        return `PutCommand ${data}`;
    } catch (err) {
        throw new Error(err.message);
    }
};
