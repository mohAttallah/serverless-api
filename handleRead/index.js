import { DynamoDBDocumentClient, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import { tableName } from './constants'; 

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({}));

export const handleRead = async (id) => {
    try {
        if (id) {
            const body = await dynamo.send(
                new GetCommand({
                    TableName: tableName,
                    Key: {
                        id: id,
                    },
                })
            );
            return body.Item;
        } else {
            const body = await dynamo.send(new ScanCommand({ TableName: tableName }));
            return body.Items;
        }
    } catch (err) {
        throw new Error(err.message);
    }
};
