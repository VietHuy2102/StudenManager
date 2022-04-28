import {Student} from "./student";
 let student1 = new Student(`Tuan`,9,9)
 let student2 = new Student(`Huy`,8,7)


let arr: Student[] = [];
arr.push(student1,student2)
function stats(arr) {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] < 6) {
            count0++;
        } else if (6 <= arr[i] && arr[i] < 9) {
            count1++;
        } else {count2++}
    }
    console.log(`Co ${count0} sinh vien duoi 6 diem`)
    console.log(`Co ${count1} sinh vien duoi tu 6 den 8 diem`)
    console.log(`Co ${count2} sinh vien tren 9 diem`)
}