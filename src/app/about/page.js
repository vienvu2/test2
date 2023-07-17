import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react/rsc";

export default async function About() {
  const { data } = await fetchData();

  console.log("About", data);
  if (data) {
    return (
      <div>
        {JSON.stringify(data.story.content)}
        <StoryblokStory story={data.story} />
      </div>
    );
  }
  return <div />;
}

export async function fetchData() {
  let sbParams = {
    cv: '1689577947'
  };
  const storyblokApi = getStoryblokApi();
  return storyblokApi?.get(`cdn/stories/about`, sbParams);
}
