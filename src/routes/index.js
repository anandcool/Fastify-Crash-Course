const courseControllers = require('../controller/courseController')

const routes = [{
    method:"GET",
    url:"/api/courses",
    handler:courseControllers.getCourse
},{
    method:"GET",
    url:"/api/course/:id",
    handler:courseControllers.getSingleCourse
},{
    method:"POST",
    url:"/api/course",
    handler:courseControllers.addCourse
},{
    method:"PUT",
    url:"/api/course/:id",
    handler:courseControllers.updateCourse
},{
    method:"DELETE",
    url:"/api/course/:id",
    handler:courseControllers.deleteCourse
}]

module.exports = routes;