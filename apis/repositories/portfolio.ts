import { Repository, apiUrl } from "apis";

const url = `${apiUrl}/portfolio`;
const PortfolioRepository = {
  ...Repository(url),
};
export default PortfolioRepository;
