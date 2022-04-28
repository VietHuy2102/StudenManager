import {Student} from "./student";
export class StudentManager {

    listStudent: Student[] = [];

    add(data: Student) {
        this.listStudent.push(data)
    }
    delete(index: number ){
        this.listStudent.splice(index,1)
    }

     update(student:Student, name: string, classroom: number, point: number ) {
         student.setName(name)
         student.setClassroom(classroom)
         student.setPoint(point)

    }


}
let studentManager = new StudentManager()


let student1 =new Student(`Huy`,8, 4);
let student2 =new Student(`suki`,8, 6);
let student3 =new Student(`Tung`,8, 8);
let student4 =new Student(`Uyen`,8, 9);
let student5 =new Student(`bachtung`,8, 7);

studentManager.add(student1);
studentManager.add(student2);
studentManager.add(student3);
studentManager.add(student4);
studentManager.add(student5);
console.log(studentManager)y
studentManager.delete(1)
console.log(studentManager)
studentManager.update(student5,`ddsadasj`,2,3)
console.log(studentManager)


function Thong_ke() {
    let count0 = 0
    let count1 = 0
    let count2 = 0

    let arr = studentManager.listStudent;

    for (let i = 0; i <arr.length; i++) {
        if (arr[i].point < 6) {
            count0++
        }
        if (arr[i].point >= 6 && arr[i].point <= 8) {
            count1++
        }
        if (arr[i].point > 8) {
            count2++
        }

    }
    console.log(count0);
    console.log(count1);
    console.log(count2)
}
Thong_ke();
