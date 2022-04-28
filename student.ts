export class Student{
    name : string;
    classroom: number;
    point: number;

    constructor(name: string,
                classroom: number,
                point: number) {


        this.name = name;
        this.classroom = classroom;
        this.point = point;
    }
    getName():string{
        return this.name
    }
    getClassroom(): number{
        return this.classroom;
    }
    getPoint(): number{
        return this.point
    }
    setName(name: string):void{
        this.name = name
    }
    setClassroom(classroom: number):void{
        this.classroom = classroom
    }
    setPoint(point: number):void{
        this.point = point
    }
}