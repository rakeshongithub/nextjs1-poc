import stateCityAdvisors from "@/_mocks_/stateCityAdvisors.json";
import flatMapDeep from "lodash/flatMapDeep";
import uniqBy from "lodash/unionBy";

export const transformStateCity = () => {
  const arrayOfObj = Object.values(stateCityAdvisors.stateCityAdvisors);
  const allAdvisorsData = arrayOfObj?.map((item) => Object.values(item));
  const allAdvisors = flatMapDeep(allAdvisorsData);
  const stateLists = uniqBy(allAdvisors, "state");
  return { allAdvisors, stateLists };
};

export const createPageRoutes = (stateLists: any) => {
  return stateLists.map((item: any) => {
    return {
      state: item.state,
      city: item.city,
    };
  });
};
