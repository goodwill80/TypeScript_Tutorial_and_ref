// *** Partial Type - setting the properties of generics to be optional
var createCourseObjective = function (title, description, date) {
    // Typescript does not like an object with existing type to be set empty initially
    // we can implement Partial to override the restriction and turn the properties to optional
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // We need to return it back as original state which is CourseObjective
    return courseGoal;
};
// *** Read Only Generics
var namesOfPersons = ['Max', 'Ann'];
names.push('manu');
