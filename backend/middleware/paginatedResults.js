function paginatedResults(req, res, next){
        const models = res.models
        const type = res.type
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        let search = req.query.search || ""
        let resultModels = models
        let searchedModels
        let totalPages = Math.ceil(resultModels.length / limit)
        const startIdx = (page - 1) * limit
        const endIdx = page * limit
        const results = {}
        if (search){
            search = search.toLowerCase()
            if(type === "users"){
                searchedModels = models.filter((model) => model.name.toLowerCase().includes(search) || model.email.toLowerCase().includes(search) || model.role.toLowerCase().includes(search))
            }
            else if (type === "projects"){
                searchedModels = models.filter((model) => model.title.toLowerCase().includes(search) || model.description.toLowerCase().includes(search))
            }
            else if (type === "tickets"){
                searchedModels = models.filter((model) => model.title.toLowerCase().includes(search) || model["Project Name"].toLowerCase().includes(search) || model.priority.toLowerCase().includes(search)
                || model.developer.toLowerCase().includes(search) || model.date.toISOString().slice(0, 10).includes(search))
                
                console.log(searchedModels)
            }
            else if (type === "comments"){
                searchedModels = models.filter((model) => model.commenter.toLowerCase().includes(search) || model.message.toLowerCase().includes(search)
                || model.date.includes(search))
            }
            totalPages = Math.ceil(searchedModels.length / limit)
            
            if (searchedModels.length > limit){
                resultModels = searchedModels.slice(startIdx, endIdx)
            }
            else{
                resultModels = searchedModels
            }
        }
        else{
            resultModels = models.slice(startIdx, endIdx)
        }
        res.paginatedResults = resultModels
        res.totalPages = totalPages
        next()
    }

module.exports = paginatedResults