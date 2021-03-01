const Course = require('../model/Course')


//Get All Course
exports.getCourse = async (request,reply) =>{
    try {
        const courses = await Course.find();
        return courses;

    } catch (error) {
        throw error
    }
}

// Get a Single course

exports.getSingleCourse = async (request,reply) =>{
    try {
        const courseId = request.params.id;
        const course = await Course.findById(courseId)
        return course;
    } catch (error) {
        throw error
    }
}

//Add a Course
exports.addCourse = async (request,reply) =>{
    try {
        const course = new Course(request.body)
        return course.save()

    } catch (error) {
        throw error
    }
}

//Update a Course

exports.updateCourse = async (request,reply) =>{
    try {
        const courseId = request.params.id
        const course = request.body;
        const {...updateCourse} = course
        const update = await Course.findByIdAndUpdate(courseId,updateCourse)
        return update;
    } catch (error) {
        throw error
    }
}


//Delete a Course

exports.deleteCourse = async (request,reply) =>{
    try {
        const courseId = request.params.id
        const course = Course.findByIdAndDelete(courseId)
        return course;
    } catch (error) {
        throw error
    }
}