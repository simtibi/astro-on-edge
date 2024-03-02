import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro_C07mJ2eW.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    geo: { city }
  } = Astro2.locals.netlify.context;
  console.log(Astro2.locals.netlify.context.geo.city);
  return renderTemplate`${maybeRenderHead()}<h1>Hello there, friendly visitor from ${city}!</h1>`;
}, "/Users/simontibor/www/astro/astro-on-edge/astro-on-edge/src/pages/index.astro", void 0);

const $$file = "/Users/simontibor/www/astro/astro-on-edge/astro-on-edge/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
