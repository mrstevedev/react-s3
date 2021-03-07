//  Node.js Lambda Function

const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const SES = new AWS.SES({region: 'us-west-2'});

exports.handler = async (event) => {
    const reqBody = JSON.parse(event.body);
    
    const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <p>Name: ${reqBody.name}</p>
        <p>Email: ${reqBody.email}</p>
        <p>Message: ${reqBody.message}</p>
      </body>
    </html>
  `;

  const emailParams = {
    Destination: {
      ToAddresses: [`${reqBody.email}`]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody
        },
        Text: {
          Charset: "UTF-8",
          Data: 'MK Message'
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Thank you for registering with MKDecision!"
      }
    },
    Source: `${reqBody.name} <stevendotpulido@gmail.com>`
  };
    const params = {
        TableName: 'messages',
        Item: {
            messageId: new Date().toISOString(),
            message: reqBody.message,
            name: reqBody.name,
            email: reqBody.email
        }
    };
    try {
        const res = await documentClient.put(params).promise();
        await SES.sendEmail(emailParams).promise();
        console.log(res)
    } catch(err) {
        console.log(err)
    }
};
