"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var student_1 = require("./student");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.listStudent = [];
    }
    StudentManager.prototype.add = function (data) {
        this.listStudent.push(data);
    };
    StudentManager.prototype.delete = function (index) {
        this.listStudent.splice(index, 1);
    };
    StudentManager.prototype.update = function (student, name, classroom, point) {
        student.setName(name);
        student.setClassroom(classroom);
        student.setPoint(point);
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
var studentManager = new StudentManager();
var student1 = new student_1.Student("Huy", 8, 4);
var student2 = new student_1.Student("suki", 8, 6);
var student3 = new student_1.Student("Tung", 8, 8);
var student4 = new student_1.Student("Uyen", 8, 9);
var student5 = new student_1.Student("bachtung", 8, 7);
studentManager.add(student1);
studentManager.add(student2);
studentManager.add(student3);
studentManager.add(student4);
studentManager.add(student5);
console.log(studentManager);
y;
studentManager.delete(1);
console.log(studentManager);
studentManager.update(student5, "ddsadasj", 2, 3);
console.log(studentManager);
function Thong_ke() {
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    var arr = studentManager.listStudent;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].point < 6) {
            count0++;
        }
        if (arr[i].point >= 6 && arr[i].point <= 8) {
            count1++;
        }
        if (arr[i].point > 8) {
            count2++;
        }
    }
    console.log(count0);
    console.log(count1);
    console.log(count2);
}
Thong_ke();
