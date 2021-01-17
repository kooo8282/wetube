export const home = (req, res) => res.render("home", {pageTitle:"Home"});

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    // res.render("search", {pageTitle:"Search", searchingBy:searchingBy});
    const {query: { term: searchingBy }} = req;
    res.render("search", {pageTitle:"Search", searchingBy});
}

export const video = (req, res) => res.render("video", {pageTitle:"Video"});
export const upload = (req, res) => res.render("upload", {pageTitle:"Upload"});
export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle:"Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", {pageTitle:"Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle:"Delete Video"});