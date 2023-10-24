import Prompt from "@models/prompt";
import {  connectToDatabase } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, Date, tag } = await request.json();

    try {
        await connectToDatabase();
        const newPrompt = new Prompt({ creator: userId, prompt, Date, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

