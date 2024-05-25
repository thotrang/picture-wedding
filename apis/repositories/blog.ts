import { Repository, apiUrl } from "apis";

const url = `${apiUrl}blogs`;
const BlogsRepository = {
  ...Repository(url),
};
export default BlogsRepository;
