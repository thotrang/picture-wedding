import { Repository, apiUrl } from "apis";

const url = `${apiUrl}clients`;
const ClientRepository = {
  ...Repository(url),
};
export default ClientRepository;
