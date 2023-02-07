import URL from '../../common/constants/url';
import { instance } from '../../common/services/apiService';
//////////////////////////////////////
///////API Calls start Here///////////
//////////////////////////////////////
export const getRestaurantListApi = (params) => {
    return instance('GET', URL.GET_RESTAURANT_LISTS, false, params);
};
  