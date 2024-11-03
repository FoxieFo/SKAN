import api from './../http';

export default class PostService {
    static async getHistograms(inn, tonality, limit, startDate, endDate ) {
        const data = this.buildHistogramRequest(inn, tonality, limit, startDate, endDate );
        console.log(data);
        return api.post("/api/v1/objectsearch/histograms", data);
    }

    static async getPostsList(inn, tonality, limit, startDate, endDate ) {
        const data = this.buildHistogramRequest(inn, tonality, limit, startDate, endDate );
        
        return api.post("/api/v1/objectsearch", data);
    }

    static async getDocuments(ids) {
        return api.post("/api/v1/documents", { ids: ids });
    }

    static buildHistogramRequest(inn, tonality, limit, startDate, endDate ) {
        return {
            intervalType: "month",
            
            histogramTypes: [
                "totalDocuments",
                "riskFactors"
            ],

            issueDateInterval: {
                startDate: startDate,
                endDate: endDate
            },

            searchContext: {
                targetSearchEntitiesContext: {
                  targetSearchEntities: [
                    {
                      type: "company",
                      inn: inn,
                    }
                  ],

                  tonality: tonality,
                  onlyWithRiskFactors: false
                }
            },
            
            similarMode: "duplicates",
            limit: limit,
            sortType: "sourceInfluence",
            sortDirectionType: "desc",

            attributeFilters: {
                excludeTechNews: true,
                excludeDigests: true
            }
        }
    }
}