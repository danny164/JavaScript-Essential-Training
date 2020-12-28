function Course() {

}

var course = new Course();
course.title = "Quynh handsome";
course.content = "Thach handsome";

console.log(course);

//////////////////////////////

function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}

// in other shorthands
var course00 = [
  new Course("Javascript Essential Training", "Quynh", 1, true, 0),
  new Course("Javascript Essential Training", "Thach", 1, true, 0)
];

// var couser01 = new Course("Javascript Essential Training", "Quynh", 1, true, 0);
// var couser02 = new Course("Javascript Essential Training", "Thach", 1, true, 0);
// console.log(couser01);
// console.log(couser02);

console.log(course00);
console.log(course00[0].instructor);
