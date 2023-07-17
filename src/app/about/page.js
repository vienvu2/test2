import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  console.log(data.story.content)
  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = {};

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/about`, sbParams);
}
