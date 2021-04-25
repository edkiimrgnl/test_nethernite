import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { apiCall } from '../lib/API_PACKAGES';
import { callForPackageVersion } from '../lib/API_VERSION';
import { callForPackage } from "../lib/API_PACKAGE";

export default new Vuex.Store({
  state: {
    filter: '',

    packages: [],
    packageVersion: null,
    packageData: null,

    page: 1,

    hasNextPage: true,
    pop: false,
  },

  getters: {

    packageDataName(state) {
      return state.packageData.default;
    },

    packageDataMain(state) {
      return state.packageData.files.map(file => {
        return {
          type: file.type,
          name: file.name
        }
      });
    },
  },

  actions: {
    async getPackages(context) {
      const packages = await apiCall();
      context.commit('setPackages', packages);
    },

    async getPackageVersion(context, {name, type}) {
      try {
        const versionsPack = await callForPackageVersion(name, type);
        const version = versionsPack.tags.latest;
        context.commit('setPackageVersion', version);
      } catch (e) {
        console.log(e);
      }
    },

    async getPackage(context, {name, type, version}) {
      const pack = await callForPackage(name, type, version);
      context.commit('setPackage', pack)
    }
  },

  mutations: {
    setPackages(state, packages) {
      state.packages = packages;
    },

    setPackageVersion(state, version) {
      state.packageVersion = version;
    },

    setPackage(state, pack) {
      state.packageData = pack;
    },

    setFilter(state, filter) {
      state.filter = filter;
    },

    setPagePlus(state) {
      state.page += 1;
    },

    setPageMinus(state) {
      state.page -= 1;
    },

    setPop(state, value) {
      state.pop = value;
    },

    setHasNextPage(state, value) {
      state.hasNextPage = value;
    }
  }
})
