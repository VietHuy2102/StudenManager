"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student_1 = require("./student");
var student1 = new student_1.Student("Tuan", 9, 9);
var student2 = new student_1.Student("Huy", 8, 7);
var arr = [];
arr.push(student1, student2);
function stats(arr) {
    var count0 = 0;
    var count1 = 0;
    var count2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 6) {
            count0++;
        }
        else if (6 <= arr[i] && arr[i] < 9) {
            count1++;
        }
        else {
            count2++;
        }
    }
    console.log("Co ".concat(count0, " sinh vien duoi 6 diem"));
    console.log("Co ".concat(count1, " sinh vien duoi tu 6 den 8 diem"));
    console.log("Co ".concat(count2, " sinh vien tren 9 diem"));
}
