import { storyblokEditable } from "@storyblok/react/rsc";
 
const Comment = ({ blok }) => (
  <div  {...storyblokEditable(blok)}>
    {blok.title}
    {blok.limit}
  </div>
);
 
export default Comment;