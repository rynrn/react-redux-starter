const LOAD_NAV_PAGES = 'LOAD_NAV_PAGES';

const initialState = {

};

export const nav = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NAV_PAGES:
      return state;
    default:
      return state;
  }
};
