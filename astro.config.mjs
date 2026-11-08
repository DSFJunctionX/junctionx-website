// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://lisbon.hackjunction.com',
	outDir: './docs',
	integrations: [mdx(), sitemap()],

	// Legacy URLs. GitHub Pages is static, so Astro emits a small HTML page at
	// each old path that forwards visitors (and search engines, via a canonical
	// link) to the new location.
	redirects: {
		'/winners-2026': '/past-events/2026/winners/',
		'/privacy/privacy': '/privacy/',
	},

	// Self-hosted fonts for the evergreen site. Astro downloads them at build
	// time, so visitors never make requests to Google. The 2026 archive keeps
	// its original fonts and does not load these.
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			weights: ['400 700'],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			weights: [400, 500],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-monospace', 'monospace'],
		},
	],
});
