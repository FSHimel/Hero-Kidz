import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

const siteUrl = "https://hero-kidzz-two.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Hero Kidzz",
    template: "%s | Hero Kidzz",
  },

  description:
    "Hero Kidzz — discover products, explore details, and enjoy a modern shopping experience.",

  applicationName: "Hero Kidzz",

  keywords: ["Hero Kidzz", "online shopping", "products", "ecommerce"],

  authors: [
    {
      name: "Fahim Shahriar",
    },
  ],

  creator: "Fahim Shahriar",
  publisher: "Hero Kidzz",

  icons: {
    icon: "https://i.ibb.co/DDbhbDRc/image.png",
    shortcut: "https://i.ibb.co/DDbhbDRc/image.png",
    apple: "https://i.ibb.co/DDbhbDRc/image.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hero Kidzz",

    title: "Hero Kidzz",
    description:
      "Hero Kidzz — discover products, explore details, and enjoy a modern shopping experience.",

    images: [
      {
        url: "https://i.ibb.co/JwRCf3Rd/image.png",
        width: 1200,
        height: 630,
        alt: "Hero Kidzz homepage",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidzz",
    description:
      "Hero Kidzz — discover products, explore details, and enjoy a modern shopping experience.",

    images: ["https://i.ibb.co/JwRCf3Rd/image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en" className={`${poppins.className} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>
          <main className="py-2 md:w-11/12 mx-auto flex-1">{children}</main>
          <footer>
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
