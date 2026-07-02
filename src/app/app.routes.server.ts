import { RenderMode, ServerRoute } from '@angular/ssr';

// Every route is statically prerendered (SSG) — no runtime server.
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
