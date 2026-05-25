import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContacts } from "@/components/FloatingContacts";
import { SITE } from "@/lib/site";
import { localBusinessJsonLd } from "@/components/StructuredData";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.tagline} | ${SITE.name}` },
      { name: "description", content: "Professional Kerala movers and packers in Al Khobar, Dammam, Dhahran and across Saudi Arabia. House shifting, furniture moving, office relocation. Call 24/7." },
      { name: "keywords", content: "movers and packers Al Khobar, movers Dammam, house shifting Al Khobar, furniture movers Saudi Arabia, packers near me, office relocation Dammam, villa shifting Khobar, Kerala movers KSA" },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_SA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "SA-04" },
      { name: "geo.placename", content: "Al Khobar" },
      { name: "theme-color", content: "#1a2a4a" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { property: "og:description", content: "Professional Kerala movers and packers in Al Khobar, Dammam, Dhahran and across Saudi Arabia. House shifting, furniture moving, office relocation. Call 24/7." },
      { name: "twitter:description", content: "Professional Kerala movers and packers in Al Khobar, Dammam, Dhahran and across Saudi Arabia. House shifting, furniture moving, office relocation. Call 24/7." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/05f882d2-d22f-4a82-a599-1f4aa12c2604/id-preview-2e614200--3a05afbb-646a-4978-879b-88a80deab0ed.lovable.app-1779700498849.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/05f882d2-d22f-4a82-a599-1f4aa12c2604/id-preview-2e614200--3a05afbb-646a-4978-879b-88a80deab0ed.lovable.app-1779700498849.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusinessJsonLd()) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pb-16 md:pb-0"><Outlet /></main>
        <Footer />
        <FloatingContacts />
      </div>
    </QueryClientProvider>
  );
}
