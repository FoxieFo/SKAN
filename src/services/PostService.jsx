import api from './../http';

export default class PostService {
    static async getHistograms(inn, tonality, limit, startDate, endDate, checkMaxFullness, checkInBusinessNews, checkOnlyMainRole, checkExcludeAnnouncements) {
        const data = this.buildHistogramRequest(inn, tonality, limit, startDate, endDate, checkMaxFullness, checkInBusinessNews, checkOnlyMainRole, checkExcludeAnnouncements);
        console.log(data);
        return api.post("/api/v1/objectsearch/histograms", data);
    }

    static async getPostsList(inn, tonality, limit, startDate, endDate, checkMaxFullness, checkInBusinessNews, checkOnlyMainRole, checkExcludeAnnouncements) {
        const data = this.buildHistogramRequest(inn, tonality, limit, startDate, endDate, checkMaxFullness, checkInBusinessNews, checkOnlyMainRole, checkExcludeAnnouncements);
        
        return api.post("/api/v1/objectsearch", data);
    }

    static async getDocuments(ids) {
        return api.post("/api/v1/documents", { ids: ids });
    }

    static buildHistogramRequest(inn, tonality, limit, startDate, endDate, checkMaxFullness, checkInBusinessNews, checkOnlyMainRole, checkExcludeAnnouncements) {
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
                      maxFullness: checkMaxFullness,
                      inBusinessNews: checkInBusinessNews
                    }
                  ],
  
                  onlyMainRole: checkOnlyMainRole,
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
                excludeAnnouncements: checkExcludeAnnouncements,
                excludeDigests: true
            }
        }
    }
}