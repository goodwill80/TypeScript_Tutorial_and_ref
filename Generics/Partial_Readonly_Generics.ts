// *** Partial Type - setting the properties of generics to be optional

interface CourseObjective {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseObjective = (
  title: string,
  description: string,
  date: Date
): CourseObjective => {
  // Typescript does not like an object with existing type to be set empty initially
  // we can implement Partial to override the restriction and turn the properties to optional
  let courseGoal: Partial<CourseObjective> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  // We need to return it back as original state which is CourseObjective
  return courseGoal as CourseObjective;
};

// *** Read Only Generics
const namesOfPersons: Readonly<string[]> = ['Max', 'Ann'];
// Cannot change the items
// namesOfPersons.push('manu');
