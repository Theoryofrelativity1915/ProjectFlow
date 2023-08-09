function paginatedResults(models, type){
    return (req, res, next) => {
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
                searchedModels = models.filter((model) => model.Name.toLowerCase().includes(search) || model.Email.toLowerCase().includes(search) || model.Role.toLowerCase().includes(search))
            }
            else if (type === "projects"){
                searchedModels = models.filter((model) => model["Project Name"].toLowerCase().includes(search) || model.Description.toLowerCase().includes(search))
            }
            else if (type === "tickets"){
                searchedModels = models.filter((model) => model.Title.toLowerCase().includes(search) || model["Project Name"].toLowerCase().includes(search)
                || model.Submitter.toLowerCase().includes(search) || model.Developer.toLowerCase().includes(search)
                || model.Priority.toLowerCase().includes(search) || model.Status.includes(search) || model["Date Created"].includes(search))
            }
            else if (type === "comments"){
                searchedModels = models.filter((model) => model.Commenter.toLowerCase().includes(search) || model.Message.toLowerCase().includes(search)
                || model["Date Created"].includes(search))
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