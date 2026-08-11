# Mohamed Aziz Ben Slima — Portfolio

Personal portfolio focused on Data Science, Machine Learning and AI, with an
AI chat assistant that answers visitor questions about my background.

## Stack

- **Next.js 15.5** (App Router), **React 19**, TypeScript 5
- **Tailwind CSS 4** — configured in CSS (`src/app/globals.css`), there is no
  `tailwind.config.ts`
- **shadcn/ui** (Radix primitives), lucide-react + react-icons
- **Vercel AI SDK** with Groq (`llama-3.3-70b-versatile`)
- Deployed on **Vercel**
- Package manager: **npm**

No database. The site is static content plus one streaming API route.

## Getting started

Requires Node.js 20 or later.

```bash
npm install
```

```bash
cp .env.example .env.local
```

Add your Groq API key to `.env.local` (free tier at
[console.groq.com](https://console.groq.com)):

```env
GROQ_API_KEY=your_key_here
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Project structure

```
src/
├── app/
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Root layout, theme bootstrap script
│   ├── globals.css         # Tailwind 4 theme + custom utilities
│   ├── about/              # Background and education
│   ├── skills/             # Technical skills
│   ├── experience/         # Internships
│   ├── projects/           # Academic, internship, personal
│   ├── certifications/     # Credentials
│   ├── activities/         # Events and competitions
│   ├── contact/            # Contact page
│   └── api/chat/route.ts   # POST /api/chat — streaming Groq endpoint
├── components/
│   ├── navbar.tsx
│   ├── chat-assistant.tsx  # Floating chat panel
│   ├── scroll-reveal.tsx   # IntersectionObserver entrance animations
│   └── ui/                 # 14 shadcn components
├── hooks/use-toast.ts
└── lib/
    ├── cv-context.ts       # CV context + suggested questions for the AI
    └── utils.ts

public/                     # Images, icons, cv.pdf
```

## AI chat assistant

`POST /api/chat` streams responses from Groq. The system prompt is built from
`CV_CONTEXT` in `src/lib/cv-context.ts` and instructs the model to answer only
from that context.

To customise the assistant:

- **What it knows** — `CV_CONTEXT` in `src/lib/cv-context.ts`
- **Suggested questions** — `SUGGESTED_QUESTIONS` in the same file
- **Model, temperature, response length** — `src/app/api/chat/route.ts`

### Rate limiting caveat

`src/app/api/chat/route.ts` keeps a per-IP counter in an in-memory `Map`. On
Vercel this is **not** a real safeguard: serverless instances do not share
memory and the counter resets on every deployment. It deters casual repeat
requests from a single warm instance and nothing more. Use Vercel KV or an
equivalent shared store if the endpoint needs actual protection.

## Editing the content

All content lives in **`src/data/portfolio.tsx`** — one exported object per
section: `PERSONAL_INFO`, `SKILLS`, `PROFESSIONAL_EXPERIENCE`, `INTERNSHIPS`,
`PROJECTS`, `EDUCATION`, `CERTIFICATIONS`, `LANGUAGES`, `ACTIVITIES`. Every page
imports from there, so a change lands everywhere at once.

One exception: `src/lib/cv-context.ts` restates this content in prose for the AI
assistant and is maintained separately. Update it when you add something the
assistant should know about.

Images go in `public/`: profile photo at `public/profile.jpg`, certification
images in `public/certifications/`, activity images in `public/activities/`.
**Filename casing matters** — Vercel runs Linux, which is case-sensitive, while
local Windows development is not.

## Deployment

Pushing to `main` triggers a Vercel deployment. `GROQ_API_KEY` must be set in
Project Settings → Environment Variables, otherwise `/api/chat` returns 401 in
production.

A failed build does not take the site down: the previous deployment stays live.

## Links

- **GitHub**: https://github.com/AzizBS26
- **LinkedIn**: https://linkedin.com/in/mohamed-aziz-ben-slima
- **Email**: mohammedaziz.benslima@esprit.tn

## License

MIT
