import autoprefixer from "autoprefixer";
import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    scss: {
      prependData: "@import './src/scss/variable.scss';",
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
};
