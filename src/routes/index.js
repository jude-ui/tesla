import { wrap } from 'svelte-spa-router/wrap'
import Home from '@/routes/Home.svelte'

export default {
  "/": Home,
  "/elon": wrap({
    asyncComponent: () => import("@/routes/elon/Elon.svelte"),
  }),
  "/tesla": wrap({
    asyncComponent: () => import("@/routes/tesla/Mission.svelte"),
  }),
  "/tesla/vision": wrap({
    asyncComponent: () => import("@/routes/tesla/Vision.svelte"),
  }),
  "/tesla/growth": wrap({
    asyncComponent: () => import("@/routes/tesla/Growth.svelte"),
  }),
  "/tesla/data": wrap({
    asyncComponent: () => import("@/routes/tesla/Data.svelte"),
  }),
  "/invest": wrap({
    asyncComponent: () => import("@/routes/invest/Compound.svelte"),
  }),
  "/invest/sage": wrap({
    asyncComponent: () => import("@/routes/invest/Sage.svelte"),
  }),
  "/invest/america": wrap({
    asyncComponent: () => import("@/routes/invest/America.svelte"),
  }),
  "/invest/auto": wrap({
    asyncComponent: () => import("@/routes/invest/Auto.svelte"),
  }),
  "/community": wrap({
    asyncComponent: () => import("@/routes/community/Twitter.svelte"),
  }),
  "/community/youtube": wrap({
    asyncComponent: () => import("@/routes/community/YouTube.svelte"),
  }),
  "*": wrap({
    asyncComponent: () => import("@/routes/NotFound.svelte"),
  }),
};