import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { tableName } from './constants';

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handleUpdate = async (id , data) => {
    try {
        await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: {
                    id: id,
                    name: data.name,
                    age: data.age,
                },
            })
        );
        return `PutCommand ${id}`;
    } catch (err) {
        throw new Error(err.message);
    }
};
