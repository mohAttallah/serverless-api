import { DynamoDBDocumentClient, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { tableName } from './constants'; // Assuming you create a separate file for constants

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handleDelete = async (id) => {
    try {
        await dynamo.send(
            new DeleteCommand({
                TableName: tableName,
                Key: {
                    id: id,
                },
            })
        );
        return `Deleted people: ${id}`;
    } catch (err) {
        throw new Error(err.message);
    }
};
