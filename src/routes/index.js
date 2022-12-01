import { wrap } from 'svelte-spa-router/wrap'
import Home from '@/routes/Home.svelte'

export default {
  "/": Home,
  "*": wrap({
    asyncComponent: () => import("@/routes/NotFound.svelte"),
  }),
};