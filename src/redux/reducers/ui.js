import { createReducer } from 'deox';
import { uiActions } from '@/redux/actions';

export const EDeviceType = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
};

const initialState = {
  device: {
    type: window.innerWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
    isMobile: window.innerWidth <= 991,
    width: window.innerWidth,
  },
};

const reducer = createReducer(initialState, (handleAction) => [
  handleAction(uiActions.setDevice, (state, { payload }) => ({
    ...state,
    device: {
      type: payload.deviceWidth > 991 ? EDeviceType.DESKTOP : EDeviceType.MOBILE,
      isMobile: payload.deviceWidth <= 991,
      width: payload.deviceWidth,
    },
  })),
]);

export default reducer;
