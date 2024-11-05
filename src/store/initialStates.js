export const accountInitialState = {
    isAuth: false,
    tariff: 1,
    usedCompanyCount: undefined, 
    companyLimit: undefined
};

export const publicationsInitialState = {
    histogram: JSON.parse(localStorage.getItem("histogram")),
    histogramLoadedDate: JSON.parse(localStorage.getItem("histogramLoadDate")),
    publicationsList: JSON.parse(localStorage.getItem("publicationsList"))
};