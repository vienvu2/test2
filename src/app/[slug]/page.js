import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home(context) {
  const { data } = await fetchData(context);
  return <StoryblokStory story={data.story} />;
}

export async function fetchData({ params }) {
  const slug = params.slug || 'home';
  let sbParams = {
    cv: '2132'
  };

  console.log("slug", slug);

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/${slug}`, sbParams);
}
