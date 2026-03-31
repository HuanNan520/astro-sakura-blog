# Astro Sakura Blog

A beautiful, feature-rich blog template built with Astro 6 and Tailwind CSS, featuring a cherry blossom aesthetic and a built-in music player.

**Live Demo:** [huannan.top](https://huannan.top)

![Homepage](screenshots/homepage.png)

<details>
<summary>More Screenshots</summary>

### Dark Mode
![Dark Mode](screenshots/dark-mode.png)

### Blog List
![Blog](screenshots/blog.png)

### Article Page
![Article](screenshots/article.png)

### Mobile
<img src="screenshots/mobile.png" width="390" alt="Mobile" />

</details>

## Features

- **Cherry Blossom Theme** — Sakura-inspired design with glassmorphism, gradient accents, and smooth animations
- **Built-in Music Player** — Custom player with playlist, bilingual lyrics sync, Apple Music-style blur, drag-to-move, and MediaSession API (keyboard media keys, system notifications)
- **Dark / Light Mode** — Automatic time-based switching (dark after 18:00), manual toggle
- **Full-text Search** — Client-side search powered by Fuse.js
- **View Transitions** — Smooth page transitions via Astro's built-in router
- **Series Navigation** — Group related posts with automatic prev/next links
- **Per-article BGM** — Set background music per blog post via frontmatter
- **Comments** — Optional Waline integration
- **RSS Feed** — Auto-generated
- **SEO Optimized** — JSON-LD, OpenGraph, Twitter Cards, sitemap
- **Mobile Responsive** — Bottom navigation bar, touch-friendly player
- **Reading Progress Bar** — Visual scroll indicator
- **Code Block Copy** — One-click copy on code blocks
- **Image Lightbox** — Click to zoom images

## Quick Start

```bash
# Clone the repo
git clone https://github.com/HuanNan520/astro-sakura-blog.git
cd astro-sakura-blog

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Configuration

All site settings live in a single file: **`src/config.ts`**

```typescript
export const siteConfig = {
  name: "My Blog",                    // Site title
  description: "My personal blog",   // SEO description
  url: "https://myblog.com",         // Your deployed URL
  language: "en",                    // "en" | "zh-CN" | "ja"

  author: {
    name: "Your Name",
    tagline: "Writer / Developer",
    avatar: "/images/avatar.png",
    motto: "Your favorite quote.",
  },

  // ... hero, quotes, projects, social links, comments, analytics
};
```

See `src/config.ts` for the full reference with comments.

## Writing Posts

Create `.md` or `.mdx` files in `src/content/blog/`:

```yaml
---
title: "My Post Title"
summary: "A brief summary"
date: 2026-01-01
cover: "../../assets/images/covers/cover-1.webp"  # optional
tags: ["Tag1", "Tag2"]
bgm: "Song Name"           # optional: auto-play this song
series: "Series Name"       # optional: group posts
seriesOrder: 1              # optional: order in series
---

Your content here...
```

## Music Player

Add songs to **`src/data/playlist.ts`**:

```typescript
export const instrumental: Song[] = [
  { name: 'Track Name', artist: 'Artist', url: '/music/track.mp3', cover: '/images/covers/cover.webp' },
];

export const vocal: Song[] = [];

export const lyrics: Record<string, LyricLine[]> = {
  'Track Name': [
    { time: 0.0, ja: '(Intro)', zh: '' },
    { time: 15.0, ja: 'First lyric line', zh: 'Translation' },
  ],
};
```

Place MP3 files in `public/music/` and cover images in `public/images/covers/`.

The player works with zero songs configured — it shows a friendly empty state.

## Comments

1. Set up [Waline](https://waline.js.org) (free hosting on Vercel)
2. Add your server URL in `src/config.ts`:
   ```typescript
   comments: { serverURL: "https://your-waline.vercel.app" }
   ```

Leave `serverURL` empty to disable comments.

## Deployment

### Cloudflare Pages

1. Push to GitHub
2. Connect repo in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `dist`

### Vercel / Netlify

Zero-config — just connect your repo.

## Tech Stack

- [Astro 6](https://astro.build) — Static site generator
- [Tailwind CSS v3](https://tailwindcss.com) — Utility-first CSS
- [MDX](https://mdxjs.com) — Markdown with components
- [Fuse.js](https://www.fusejs.io) — Fuzzy search
- Self-hosted fonts: Manrope + Noto Serif SC

## Project Structure

```
src/
├── config.ts              # All site configuration
├── data/playlist.ts       # Music player data
├── layouts/Base.astro     # Main layout
├── pages/
│   ├── index.astro        # Homepage
│   ├── blog/              # Blog listing & posts
│   ├── projects.astro     # Projects showcase
│   ├── about.astro        # About page
│   ├── tags.astro         # Tag cloud
│   └── archives.astro     # Post archive
├── components/
│   ├── MusicPlayer.astro  # Built-in music player
│   ├── Footer.astro
│   └── ...
├── content/blog/          # Your blog posts (.md/.mdx)
└── styles/global.css      # Global styles
```

## License

MIT
