import { IClient } from "@/types/client";
import { IPortfolio } from "@/types/portfolio";
import { IService } from "@/types/service";
import { createModel } from "@rematch/core";
import ClientRepository from "apis/repositories/client";
import PortfolioRepository from "apis/repositories/portfolio";
import ServiceRepository from "apis/repositories/service";
import { RootModel } from "stores";
interface IState {
  services: IService[] | null;
  portfolios: IPortfolio[];
  portfolioDetail: IPortfolio;
  clients: IClient[];
}
export const data_store = createModel<RootModel>()({
  state: {
    services: [],
    portfolios: [],
    portfolioDetail: {} as IPortfolio,
    clients: [],
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
    setClients(state, clients) {
      return { ...state, clients };
    },
  },
  effects: (dispatch) => ({
    async getServices(_, rootState) {
      if (!rootState.data_store.services?.length) {
        const res = await ServiceRepository.get({
          populate: "*",
        });
        dispatch.data_store.setServices(res);
        return res;
      }
    },
    async getPortfolios(_, rootState) {
      if (!rootState.data_store.portfolios?.length) {
        const res = await PortfolioRepository.get({
          populate: "*",
        });
        dispatch.data_store.setPortfolios(res);
        return res;
      }
    },
    async getPortfolio(id) {
      const res = await PortfolioRepository.getOne(id, {
        populate: "*",
      });
      dispatch.data_store.setPortfolio(res);
      return res;
    },
    async getClients(_, rootState) {
      if (!rootState.data_store.clients?.length) {
        const res = await ClientRepository.get({
          populate: "*",
        });
        dispatch.data_store.setClients(res);
        return res;
      }
    },
  }),
});
