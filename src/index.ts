import { prisma } from './generated/prisma-client';

// A `main` function so that we can use async/await
async function main() {
  // Create a new message
  /*const newMessage = await prisma.createMessage({
    clientId: 1235,
    receivedAt: '08/02/2019 à 00:59:39',
    _projectId: '25',
    project: { 
      create: {
        clientId: 1235,
        accounts?: AccountCreateManyWithoutProjectInput;
        persons?: PersonCreateManyWithoutProjectInput;
        name: String;
      }, 
      connect: 'ProjectCreateWithoutMessagesInput' 
    },
    sub_messages?: 'SubmessageCreateManyWithoutMessageInput',
    submitter: PersonCreateOneWithoutSubmitted_messagesInput;
    requester?: PersonCreateOneWithoutRequested_messagesInput;
    ccs?: PersonCreateManyWithoutCc_messagesInput;
    integration_url?: String;
    integration_id?: String;
    title?: String;
    content?: String;
    channel?: CHANNEL;
    read?: Boolean;
    updated?: Boolean;
    archived?: Boolean;
    processed?: Boolean;
  });
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`);*/

  // Read messages by clientId from the database and print them to the console
  const clientMessage = await prisma.message({
    clientId: 1235,
  });
  console.log(clientMessage);
}

main().catch(e => console.error(e));
