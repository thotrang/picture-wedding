import { Repository, apiUrl } from "apis";

const url = `${apiUrl}contacts`;
const ContactRepository = {
  ...Repository(url),
};
export default ContactRepository;
