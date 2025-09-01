import Cloudflare from "cloudflare";

export const AiTesting = async () => {
    const client = new Cloudflare({
        apiToken: process.env.Cloudflare_api_token, 
    });

    const response = await client.ai.run("@cf/black-forest-labs/flux-1-schnell", {
        account_id: process.env.Cloudflare_account_id ?? "",
        prompt: "make a house with cool morning backdrop",
    });
    return response;
};

