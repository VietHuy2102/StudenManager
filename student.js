"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, classroom, point) {
        this.name = name;
        this.classroom = classroom;
        this.point = point;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getClassroom = function () {
        return this.classroom;
    };
    Student.prototype.getPoint = function () {
        return this.point;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setClassroom = function (classroom) {
        this.classroom = classroom;
    };
    Student.prototype.setPoint = function (point) {
        this.point = point;
    };
    return Student;
}());
exports.Student = Student;
