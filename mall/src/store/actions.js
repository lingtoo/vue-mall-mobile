import { categoryCache, searchHistoryCache, cityCache } from '@/assets/js/cache';
import * as types from './mutations-type';

// 设置大分类列表
const setCategoryList = ({ commit }, categoryList) => {
  commit(types.CATEGORY_LIST, categoryCache.setCache(categoryList));
};

// 设置搜索历史列表
const setSearchHistory = ({ commit }, searchKeyword) => {
  commit(types.SEARCH_HISTORY_LIST, searchHistoryCache.setCache(searchKeyword));
};

// 删除搜索历史列表
const deleteSearchHistory = ({ commit }) => {
  commit(types.SEARCH_HISTORY_LIST, searchHistoryCache.deleteCache());
}

// 设置城市
const setCity = ({ commit }, city) => {
  commit(types.CITY, cityCache.setCache(city));
};

export default {
  setCategoryList, // 设置大分类列表
  setSearchHistory, // 设置搜索历史列表
  deleteSearchHistory, // 删除搜索历史列表
  setCity, // 设置城市
}