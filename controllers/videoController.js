import { videos } from "../db"
import routes from "../routes"

export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", videos }); //now home template has videos Obj.

}

export const search = (req, res) => {
    // const searchingBy = req.query.term;
    // res.render("search", {pageTitle:"Search", searchingBy:searchingBy});
    const { query: { term: searchingBy } } = req;
    res.render("search", { pageTitle: "Search", searchingBy, videos });
}

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const getUpload = (req, res) => {
    res.render("upload", { pageTitle: "Upload" });
}

export const postUpload = (req, res) => {
    const {
        body:{file, title, description}
        } = req;
    // To do : Upload and save video
    res.redirect(routes.videoDetail(232325)) //fake id in fake db
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });