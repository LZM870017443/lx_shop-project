import ajax from "./ajax";

// 1. 定义基础路径
const BASE_URL = "http://demo.itlike.com/web/xlmc";
//获取主页数据
export const getHomeData = () => ajax(BASE_URL + "/api/homeApi");
//获取类别
export const getCategories = () => ajax(BASE_URL + "/api/homeApi/categories");
//获取类别数据
export const getCategoriesDetail = (preParams) =>
  ajax(BASE_URL + "/api/homeApi/categoriesdetail" + preParams);
