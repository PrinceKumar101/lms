import Cloudflare from "cloudflare";

export const AiTesting = async () => {
    const client = new Cloudflare({
        apiToken: "QzoHjbIXF_omPdYSbYk3A5mw_xEAqrEVICea22CN", 
    });

    const response = await client.ai.run("@cf/black-forest-labs/flux-1-schnell", {
        account_id: "750250527aa24e3c4d35a9a1a523ae86",
        prompt: "make a house with cool morning backdrop",
    });
    return response;
};

