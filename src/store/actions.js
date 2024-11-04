import { createAction } from '@reduxjs/toolkit';

export const ACTIONS = {
    SET_AUTH: "SET_AUTH",
	SET_TARIFF: "SET_TARIFF",
	SET_ACCOUNT_INFO: "SET_ACCOUNT_INFO",
	SET_HISTOGRAM: "SET_HISTOGRAM",
	SET_HISTOGRAM_DATE: "SET_HISTOGRAM_DATE",
	SET_PUBLICATIONS_LIST: "SET_PUBLICATIONS_LIST"
};

export const setAuth = (bool) => {
	return {
		type: ACTIONS.SET_AUTH,
		payload: bool,
	}
}

export const setTariff = (number) => {
	return {
		type: ACTIONS.SET_TARIFF,
		payload: number
	}
}

export const setAccountInfo = (usedCompanyCount, companyLimit) => {
	return {
		type: ACTIONS.SET_ACCOUNT_INFO,
		usedCompanyCount: usedCompanyCount,
		companyLimit: companyLimit
	}
}

export const setHistogram = createAction('SET_HISTOGRAM', function prepare(response) {
    return {
        payload: {
            data: response.data,
            headers: { contentLength: response.headers['content-length'] }
        }
    };
});

export const setHistogramDate = (date) => {
	return {
		type: ACTIONS.SET_HISTOGRAM_DATE,
		date: date
	}
}

export const setPostsList = (list) => {
	return {
		type: ACTIONS.SET_PUBLICATIONS_LIST,
		list: list
	}
}