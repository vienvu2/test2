/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Feature from "./Feature";
import Grid from "./Grid";
import Teaser from "./Teaser";
import Page from "./Page";
import Product from "./Product";
import Comment from "./Comment";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  product: Product,
  comment: Comment,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "A1CA6hR0NYBGGnU1tYmB8wtt",
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
