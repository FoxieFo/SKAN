import { ACTIONS } from '../actions';
import { accountInitialState } from '../initialStates';

export default function loginReducer(state = accountInitialState, action) {
    switch(action.type) {
        case ACTIONS.SET_AUTH: {
            if (action.payload === false) {
                localStorage.removeItem("token");
                localStorage.removeItem("expire");
            }

            return {
                ...state, 
                isAuth: action.payload,
                usedCompanyCount: action.payload ? state.usedCompanyCount : undefined,
                companyLimit: action.payload ? state.companyLimit : undefined
            };
        }

        case ACTIONS.SET_TARIFF: return {
            ...state, 
            tariff: action.number
        };

        case ACTIONS.SET_ACCOUNT_INFO: return {
            ...state,
            usedCompanyCount: action.usedCompanyCount,
            companyLimit: action.companyLimit
        }

        default: return state;
    }
}