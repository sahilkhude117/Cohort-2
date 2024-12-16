import { createClient } from "redis";
const client = createClient();

async function processSubmission(submission: string){
    const {problemid,code,language} = JSON.parse(submission);

    console.log(`processing submission for problemid ${problemid}...`);
    console.log(`Code: ${code}`);
    console.log(`Language: ${language}`);
    //Here you would add your actual processing logic

    //simulate processing delay
    await new Promise(resolve => setTimeout(resolve,1000));
    console.log(`Finished processing submission for problemid ${problemid}.`);
    client.publish("problem_done", JSON.stringify({ problemid, status: "TLE" }));
}

async function startWorker() {
    try {
        await client.connect();
        console.log('Worker connecte to redis');

        //main loop

        while(true){
            try {
                const submission = await client.brPop("problems",0);
                //@ts-ignore
                await processSubmission(submission.element);
            } catch(e){
                console.error("Error processing submission", e);
                //implement your error handling logic here
            }
        }
    } catch(e){
        console.error("Failed to connect to redis");
    }
}

startWorker();