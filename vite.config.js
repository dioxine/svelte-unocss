import { defineConfig } from 'vite';
import { presetIcons, presetUno, extractorSvelte } from 'unocss';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		fs: {
			allow: ['locales']
		}
	},
	plugins: [
		Unocss({
			extractors: [extractorSvelte],
			presets: [presetUno(), presetIcons()]
		})
	]
});