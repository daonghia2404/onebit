import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';

export const BREAKPOINT = 1200;

export const EDeviceType = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
};

const initialState = {
  device: {
    type: window.innerWidth > BREAKPOINT ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    isMobile: window.innerWidth <= BREAKPOINT,
    width: window.innerWidth,
  },
  visibleMenu: false,
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > BREAKPOINT ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      isMobile: payload.deviceWidth <= BREAKPOINT,
      width: payload.deviceWidth,
    },
  })),
  handleAction(uiActions.setVisibleMenu, (state, { payload }) => ({
    ...state,
    visibleMenu: payload.visible,
  })),
]);

export default reducer;
