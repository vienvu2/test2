import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();


  return (
    <div>
      <h1>Story: {data.story.name}</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = {};

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/home`, sbParams);
}
