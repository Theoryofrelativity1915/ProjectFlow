function paginatedResults(models, type){
    return (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        let search = req.query.search
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
                searchedModels = models.filter((model) => model["Project Name"].toLowerCase().includes(search) || model.Description.toLowerCase().includes(search))
            }
            else if (type === "tickets"){
                searchedModels = models.filter((model) => model.Title.toLowerCase().includes(search) || model["Project Name"].toLowerCase().includes(search)
                || model.Submitter.toLowerCase().includes(search) || model.Developer.toLowerCase().includes(search)
                || model.Priority.toLowerCase().includes(search) || model.Status.includes(search) || model["Date Created"].includes(search))
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
}

module.exports = paginatedResults