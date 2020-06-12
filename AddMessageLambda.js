const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();
const SES = new AWS.SES({region: 'us-west-2'});

exports.handler = async (event, context, cb) => {
    const reqBody = JSON.parse(event.body);
    
    const htmlBody = `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <p>Hi, thank you for your registeration at http://mkdecision-react-form.s3-website-us-west-1.amazonaws.com/</p>
        <p>Name: ${reqBody.name}</p>
        <p>Email: ${reqBody.email}</p>
        <p>Message: ${reqBody.message}</p>
      </body>
    </html>
  `;

  const textBody = `
    Hi ${reqBody.name},
    ...
  `;
  // Create sendEmail params
  const emailParams = {
    Destination: {
      ToAddresses: [reqBody.email]
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: htmlBody
        },
        Text: {
          Charset: "UTF-8",
          Data: textBody
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Thank you for registering with MKDecision!"
      }
    },
    Source: "Admin from MK <stevendotpulido@gmail.com>"
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
    
     // Create the promise and SES service object
    const sendPromise = new AWS.SES({ apiVersion: "2010-12-01" })
};
