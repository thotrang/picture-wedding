import { IBLog } from "@/types/blog";
import { IClient } from "@/types/client";
import { IQuestion } from "@/types/faq";
import { IPagination } from "@/types/pagination";
import { IPortfolio } from "@/types/portfolio";
import { IService } from "@/types/service";
import { createModel } from "@rematch/core";
import BlogsRepository from "apis/repositories/blog";
import ClientRepository from "apis/repositories/client";
import ContactRepository from "apis/repositories/contact";
import PortfolioRepository from "apis/repositories/portfolio";
import QuestionRepository from "apis/repositories/question";
import ServiceRepository from "apis/repositories/service";
import { RootModel } from "stores";
interface IState {
  services: IService[] | null;
  portfolios: IPortfolio[];
  portfolioDetail: IPortfolio;
  clients: IClient[];
  pagiPortfolios: IPagination;
  questions: IQuestion[];
  blogs: IBLog[];
  blogDetail: IBLog;
  pagiBlogs: IPagination;
}
export const data_store = createModel<RootModel>()({
  state: {
    services: [],
    portfolios: [],
    portfolioDetail: {} as IPortfolio,
    clients: [],
    questions: [],
    pagiPortfolios: {} as IPagination,
    blogs: [],
    blogDetail: {} as IBLog,
    pagiBlogs: {} as IPagination,
  } as IState,
  reducers: {
    setServices(state, services: IService[]) {
      return { ...state, services };
    },
    setPortfolios(state, portfolios: IPortfolio[], pagiPortfolios) {
      return { ...state, portfolios, pagiPortfolios };
    },
    setPortfolio(state, portfolioDetail) {
      return { ...state, portfolioDetail };
    },
    setClients(state, clients) {
      return { ...state, clients };
    },
    setQuestions(state, questions) {
      return { ...state, questions };
    },
    viewMorePortfolios(state, portfolios: IPortfolio[], pagiPortfolios) {
      return {
        ...state,
        pagiPortfolios,
        portfolios: [...state.portfolios, ...portfolios],
      };
    },
    setBlog(state, blogDetail) {
      return { ...state, blogDetail };
    },
    setBlogs(state, blogs, pagiBlogs) {
      return { ...state, blogs, pagiBlogs };
    },
    viewMoreBlogs(state, blogs: IBLog[], pagiBlogs) {
      return {
        ...state,
        pagiBlogs,
        blogs: [...state.blogs, ...blogs],
      };
    },
  },
  effects: (dispatch) => ({
    async getServices(_, rootState) {
      if (!rootState.data_store.services?.length) {
        const res = await ServiceRepository.get({
          populate: "*",
        });
        dispatch.data_store.setServices(res.data);
        return res;
      }
    },
    async getPortfolios(
      { params, type }: { params?: any; type?: "filter" | "view_more" },
      rootState
    ) {
      if (!rootState.data_store.portfolios?.length || !!type) {
        const res = await PortfolioRepository.get({
          populate: "*",
          ...params,
        });
        if (type === "view_more") {
          dispatch.data_store.viewMorePortfolios(res.data, res.meta.pagination);
        } else {
          dispatch.data_store.setPortfolios(res.data, res.meta.pagination);
        }
        return res;
      }
    },
    async getBlogs(
      { params, type }: { params?: any; type?: "filter" | "view_more" },
      rootState
    ) {
      if (!rootState.data_store.blogs?.length || !!type) {
        const res = await BlogsRepository.get({
          populate: "*",
          ...params,
        });
        if (type === "view_more") {
          dispatch.data_store.viewMoreBlogs(res.data, res.meta.pagination);
        } else {
          dispatch.data_store.setBlogs(res.data, res.meta.pagination);
        }
        return res;
      }
    },
    async getBlog(id) {
      const res = await BlogsRepository.getOne(id, {
        populate: "*",
      });
      dispatch.data_store.setBlog(res.data);
      return res;
    },
    async getPortfolio(id) {
      const res = await PortfolioRepository.getOne(id, {
        populate: "*",
      });
      dispatch.data_store.setPortfolio(res.data);
      return res;
    },
    async getClients(_, rootState) {
      if (!rootState.data_store.clients?.length) {
        const res = await ClientRepository.get({
          populate: "*",
        });
        dispatch.data_store.setClients(res.data);
        return res;
      }
    },
    async getQuestions(_, rootState) {
      if (!rootState.data_store.questions?.length) {
        const res = await QuestionRepository.get({
          populate: "*",
        });
        dispatch.data_store.setQuestions(res.data);
        return res;
      }
    },
    submitContact(data) {
      return ContactRepository.post(data);
    },
  }),
});
