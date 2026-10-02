# CTF — Create the Future (Next.js 14 + Tailwind)

## Run
    npm install
    npm run dev        # http://localhost:3000

## Edit
| To change | Edit |
|---|---|
| Any text, link, product, industry | `src/data/site.ts` (all content is here) |
| Colours | `:root` in `src/app/globals.css` (+ `tailwind.config.ts`) |
| Font | `src/app/layout.tsx` (Outfit from Google Fonts) |
| Section order / remove a section | `src/app/page.tsx` |
| Layout of one section | `src/components/<Section>.tsx` |
| Images | replace files in `public/images/` (same names) |

`{Word}` in a headline turns that word green.

## Deploy
1. Push to GitHub.
2. vercel.com -> Add New Project -> import the repo -> Deploy.
3. Project -> Settings -> Domains -> add the client's domain, then have them add the DNS records Vercel shows.

## To finish before launch
- Social links (LinkedIn / Instagram / YouTube / GitHub) and "View Project" / "Explore X1" links are `#`.
- A1 and D1 product images are reused industry photos; swap in real renders (`public/images/`, update `products.items` in site.ts).
