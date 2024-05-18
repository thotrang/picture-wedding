import { Repository, apiUrl } from "apis";

const url = `${apiUrl}services`;
const ServiceRepository = {
  ...Repository(url),
};
export default ServiceRepository;
