import { Repository, apiUrl } from "apis";

const url = `${apiUrl}portfolios`;
const PortfolioRepository = {
  ...Repository(url),
};
export default PortfolioRepository;
