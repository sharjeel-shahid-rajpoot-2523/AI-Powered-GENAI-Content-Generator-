_____________________________________________________________________________________________________________________________________________________________________________

# AI-Powered GenAI Content Generator
_____________________________________________________________________________________________________________________________________________________________________________

Generate platform-tailored social media content — for **Meta (Facebook)**, **Instagram**, **LinkedIn**, and **YouTube** — from a single topic, powered by Google Gemini and LangChain.

## Live Demo

- **Frontend:** https://ai-powered-genai-content-generator-ten.vercel.app/
- **Backend API docs:** https://ai-powered-genai-content-generator.vercel.app/docs

_____________________________________________________________________________________________________________________________________________________________________________

## Features
_____________________________________________________________________________________________________________________________________________________________________________

- Enter a topic and pick a target platform
- Platform-specific prompt engineering (tone, format, length, hashtags, CTAs) tailored to each platform's conventions
- Clean React UI backed by a FastAPI service
- One-click deploy to Vercel (frontend + backend as separate projects)

_____________________________________________________________________________________________________________________________________________________________________________

## Tech Stack
_____________________________________________________________________________________________________________________________________________________________________________

**Frontend**
- React 19 + Vite
- Axios for API calls

**Backend**
- FastAPI
- LangChain + `langchain-google-genai`
- Google Gemini (`gemini-2.5-flash-lite`)
- Pydantic for request validation

_____________________________________________________________________________________________________________________________________________________________________________

## Project Structure
_____________________________________________________________________________________________________________________________________________________________________________

```
Content Generation/
├── Frontend/               # React + Vite app
│   └── src/
│       ├── components/
│       │   └── GenerateContent.jsx
│       └── services/
│           └── apiService.js   # Backend base URL lives here
├── LangChain/               # FastAPI + LangChain backend
│   ├── main.py               # FastAPI app, /generate endpoint
│   ├── socialgen.py          # Platform prompt templates + Gemini chain
│   ├── requirements.txt
│   └── .env                  # GOOGLE_API_KEY (not committed)
└── README.md
```

_____________________________________________________________________________________________________________________________________________________________________________

## Running Locally
_____________________________________________________________________________________________________________________________________________________________________________

### Backend

```bash
cd LangChain
python -m venv .venv
.venv\Scripts\Activate.ps1      # Windows PowerShell
pip install -r requirements.txt
```

Create a `.env` file in `LangChain/` with:

```
GOOGLE_API_KEY=your_gemini_api_key_here
```

Get a free key at https://aistudio.google.com/apikey

Start the server:

```bash
python main.py
```

Runs on `http://localhost:8000`.

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`. Make sure `Frontend/src/services/apiService.js` points `baseURL` at your backend (`http://localhost:8000` for local dev).

## API

**POST** `/generate`

```json
{
  "topic": "AI in healthcare",
  "platform": "LinkedIn"
}
```

Response:

```json
{
  "content": "generated post text..."
}
```

Supported `platform` values: `Meta`, `Instagram`, `LinkedIn`, `Youtube`.

_____________________________________________________________________________________________________________________________________________________________________________

## Deployment
_____________________________________________________________________________________________________________________________________________________________________________

Both apps deploy to Vercel as **separate projects** from this same repo:

1. **Backend** — new Vercel project, Root Directory set to `LangChain`, with `GOOGLE_API_KEY` added as an environment variable in Project Settings.
2. **Frontend** — new Vercel project, Root Directory set to `Frontend`. Update `apiService.js`'s `baseURL` to the deployed backend URL before deploying.
