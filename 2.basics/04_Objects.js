const tinderUser=new Object(); 
tinderUser.id="1234";
tinderUser.name="Lakshman";
tinderUser.isLoggedIn=false;
// tinderUser.details=regularUser;

const regularUser={
    email:"smthg@gmail.com",
    fullname:{
        userFullname:"Lakshman K",
        firstName:"Lakshman",
        lastName:"K"
    }
}
// console.log(tinderUser);4

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

const obj3={obj1,obj2}
console.log(obj3);
console.log(regularUser.fullname.firstName);

//******************************Functions */
const course={
    coursename:"JS",
    price:999,
    courseInstructor:"Lakshman"
}

///course.courseInstructor

const {courseInstructor:instructor}=course;

console.log(instructor); 

