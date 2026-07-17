// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.pinchana.cc',
	integrations: [
		starlight({
			title: 'Pinchana Docs',
			description: 'Use, integrate, develop, and deploy Pinchana.',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/cat.svg',
				replacesTitle: false,
			},
			social: [
				{ icon: 'github', label: 'Pinchana on GitHub', href: 'https://github.com/Pinchana' },
			],
			customCss: ['./src/styles/custom.css'],
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/Pinchana/pinchana-docs/edit/main/',
			},
			head: [
				{ tag: 'meta', attrs: { property: 'og:site_name', content: 'Pinchana Docs' } },
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#000000' } },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Overview', slug: 'start/overview' },
						{ label: 'Web interface', slug: 'start/web-interface' },
						{ label: 'Supported platforms', slug: 'start/platforms' },
						{ label: 'Downloads', slug: 'start/downloads' },
						{ label: 'Troubleshooting', slug: 'start/troubleshooting' },
					],
				},
				{
					label: 'Web',
					items: [
						{ label: 'Architecture & authentication', slug: 'web/architecture-auth' },
						{ label: 'Settings & storage', slug: 'web/settings-storage' },
						{ label: 'Custom API instances', slug: 'web/custom-instances' },
						{ label: 'Browser media pipeline', slug: 'web/media-pipeline' },
						{ label: 'Development & configuration', slug: 'web/development' },
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'Quickstart', slug: 'api/quickstart' },
						{ label: 'Authentication', slug: 'api/authentication' },
						{ label: 'Endpoint reference', slug: 'api/endpoints' },
						{ label: 'Browser flow', slug: 'api/browser-flow' },
						{ label: 'Schemas & examples', slug: 'api/schemas' },
						{ label: 'Errors & media lifecycle', slug: 'api/errors-media' },
						{ label: 'Architecture & modules', slug: 'api/architecture' },
					],
				},
				{
					label: 'DLP',
					items: [
						{ label: 'Protocol & private downloads', slug: 'api/private-downloads-dlp' },
						{ label: 'Operations & security', slug: 'dlp/operations' },
					],
				},
				{
					label: 'Translating',
					items: [
						{ label: 'Translation guide', slug: 'translating' },
					],
				},
				{
					label: 'Development & Operations',
					items: [
						{ label: 'Self-hosting quickstart', slug: 'self-hosting/quickstart' },
						{ label: 'API development', slug: 'self-hosting/api-development' },
						{ label: 'API environment reference', slug: 'self-hosting/api-environment' },
						{ label: 'Web development', slug: 'self-hosting/web-development' },
						{ label: 'Operations', slug: 'self-hosting/operations' },
						{ label: 'Contributing', slug: 'self-hosting/contributing' },
					],
				},
				{
					label: 'Deployment',
					items: [
						{ label: 'Deploy the API', slug: 'deployment/api' },
						{ label: 'Deploy the Web app', slug: 'deployment/web' },
						{ label: 'Deploy these docs', slug: 'deployment/docs' },
					],
				},
			],
		}),
	],
});
