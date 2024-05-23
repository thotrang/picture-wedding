import { IPortfolio } from "@/types/portfolio";
import { IService } from "@/types/service";
import { createModel } from "@rematch/core";
import PortfolioRepository from "apis/repositories/portfolio";
import ServiceRepository from "apis/repositories/service";
import { RootModel } from "stores";
interface IState {
  services: IService[] | null;
  portfolios: IPortfolio[];
  portfolioDetail: IPortfolio;
}
export const stores = createModel<RootModel>()({
  state: {
    services: [],
    portfolios: [],
    portfolioDetail: {} as IPortfolio,
  } as IState,
  reducers: {
    setServices(state, services: IService[]) {
      return { ...state, services };
    },
    setPortfolios(state, portfolios: IPortfolio[]) {
      return { ...state, portfolios };
    },
    setPortfolio(state, portfolioDetail) {
      return { ...state, portfolioDetail };
    },
  },
  effects: (dispatch) => ({
    async getServices(_, rootState) {
      if (!rootState.stores.services?.length) {
        const res = await ServiceRepository.get({
          populate: "*",
        });
        dispatch.stores.setServices(res);
        return res;
      }
    },
    async getPortfolios(_, rootState) {
      if (!rootState.stores.portfolios?.length) {
        const res = await PortfolioRepository.get({
          populate: "*",
        });
        dispatch.stores.setPortfolios(res);
        return res;
      }
    },
    async getPortfolio(id) {
      const res = await PortfolioRepository.getOne(id, {
        populate: "*",
      });
      dispatch.stores.setPortfolio(res);
      return res;
    },
  }),
});
