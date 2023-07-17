import StoryblokProvider from "../components/StoryblokProvider";
import "./globals.css";
import { Inter } from "next/font/google";

import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Page from "@/components/Page";

storyblokInit({
  accessToken: "A1CA6hR0NYBGGnU1tYmB8wtt",
  use: [apiPlugin],
  apiOptions: {
    region: "us",
    cache: {
      type: "none",
    },
  },
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children} </body>
      </html>
    </StoryblokProvider>
  );
}
