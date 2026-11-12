import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation" },
      {
        name: "description",
        content:
          "Traditional Telugu wedding invitation of Chi. Gireesh and Chi. La. Sow. Sri Varsha — Wednesday, 16 December 2026, Auspicious Muhurtham: 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { property: "og:site_name", content: "వావిలపల్లి వారి కళ్యాణ మహోత్సవం" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vavilapallikalyanotsavam.live/" },
      { property: "og:title", content: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation" },
      {
        property: "og:description",
        content:
          "You are warmly invited — Wednesday, 16 December 2026, Auspicious Muhurtham: 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { property: "og:image", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
      { property: "og:image:secure_url", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "వావిలపల్లి వారి కళ్యాణ మహోత్సవం — Chi. Gireesh & Chi. La. Sow. Sri Varsha" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Chi. Gireesh & Chi. La. Sow. Sri Varsha — Wedding Invitation" },
      {
        name: "twitter:description",
        content:
          "You are warmly invited — Wednesday, 16 December 2026, Auspicious Muhurtham: 8:03 AM, Komiri Village, Vizianagaram District.",
      },
      { name: "twitter:image", content: "https://vavilapallikalyanotsavam.live/og-image.jpg?v=3" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "alternate icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Noto+Serif+Telugu:wght@400;500;600;700;800;900&family=Ramabhadra&display=swap",
      },
      {
        rel: "preload",
        href: "/wedding_song.mp3",
        as: "audio",
        type: "audio/mpeg",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Instantaneous background audio with zero buttons & infinite continuous loop */}
        <audio
          id="wedding-audio"
          src="/wedding_song.mp3"
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var a = document.getElementById('wedding-audio');
                if (!a) return;
                a.volume = 1.0;
                function p() {
                  if (!a) return;
                  if (a.paused) {
                    var res = a.play();
                    if (res !== undefined && typeof res.then === 'function') {
                      res.then(function() {}).catch(function() {});
                    }
                  }
                }
                // Try immediate autoplay at 0ms
                p();
                document.addEventListener('DOMContentLoaded', p);
                window.addEventListener('load', p);
                window.addEventListener('pageshow', p);

                // For browsers requiring touch gesture, any touch, scroll or pointer instantly triggers it
                var evs = ['touchstart', 'touchend', 'touchmove', 'pointerdown', 'pointerup', 'click', 'scroll', 'wheel', 'keydown'];
                evs.forEach(function(e) {
                  window.addEventListener(e, p, { capture: true, passive: true });
                });
                document.addEventListener('visibilitychange', function() {
                  if (!document.hidden && a.paused) { p(); }
                });
                a.addEventListener('ended', function() {
                  a.currentTime = 0;
                  p();
                });
              })();
            `,
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
