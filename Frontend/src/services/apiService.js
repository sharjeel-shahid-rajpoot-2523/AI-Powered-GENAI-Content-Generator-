import axios from "axios";

const api = axios.create({
    baseURL: 'https://ai-powered-genai-content-generator.vercel.app',
});

export const generatePost = async(topic,platform) => {
    const {data} = await api.post('/generate',{topic,platform});
    return data.content;
}