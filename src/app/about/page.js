import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function About() {
  const { data } = await fetchData();

  console.log('About', data.story.content)
  return (
    <div>
    {JSON.stringify(data.story.content)}
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = {};

  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/about`, sbParams);
}
