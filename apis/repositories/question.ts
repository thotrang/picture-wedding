import { Repository, apiUrl } from "apis";

const url = `${apiUrl}faqs`;
const QuestionRepository = {
  ...Repository(url),
};
export default QuestionRepository;
