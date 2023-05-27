import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// const baseUrl = `http://localhost:3000`
import rome from "astro-rome";

const baseUrl = "https://opdev.site";

// https://astro.build/config
export default defineConfig({
	site: `${baseUrl}`,
	integrations: [
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		sitemap({
			customPages: [`${baseUrl}`],
		}),
		robotsTxt(),
		prefetch(),
		react(),
		rome(),
	],
	output: "static",
});
