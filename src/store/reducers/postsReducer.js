import { ACTIONS } from '../actions';
import { publicationsInitialState } from '../initialStates';

export default function publicationsReducer(state = publicationsInitialState, action) {
    switch (action.type) {
        case ACTIONS.SET_HISTOGRAM:
            const obj = action.response.data;
            const histogram = obj.data;
        
            let finiteArray = histogram[0].data.map(x =>
                x = {
                    date: x.date,
                    total: x.value
                }
            );
        
            histogram[1].data.forEach((value, index) => {
                finiteArray[index].riskFactors = value.value;
            });
        
            localStorage.setItem("histogram", JSON.stringify(finiteArray));
            localStorage.setItem("histogramLoadDate", JSON.stringify(new Date()));
            console.log("Saved histogram to localStorage:", finiteArray);
        
            return {
                ...state,
                histogram: finiteArray,
                histogramLoadedDate: new Date()
            };

        case ACTIONS.SET_HISTOGRAM_DATE:
            return {
                ...state,
                histogramLoadedDate: action.date
            }

        case ACTIONS.SET_PUBLICATIONS_LIST:
            if (action.list === undefined)
                localStorage.removeItem("publicationsList");
            else
                localStorage.setItem("publicationsList", JSON.stringify(action.list));

            return {
                ...state,
                publicationsList: action.list
            }

        default: return state;
    }
}