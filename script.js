// Get Element by ID
// const res=document.getElementById("container");
// console.log(res);

// Get Element by Class:
// const res1=document.getElementsByClassName("main");
// console.log(res1);

// Get Element by Tag:
// const res2=document.getElementsByTagName("div");
// console.log(res2);

// Query selector and Query selecor All:

// const res3=document.querySelector("div");
// console.log(res3);

// const res4=document.querySelectorAll("div");
// console.log(res4);

// function foo(){
//     const result = document.getElementById("email").value;
//     console.log(result);
//     if(result == "b50wd2tmail@gmail.com")
//     {
//         console.log("Valid-User")
//     }
//     else
//     {
//         Console.log("Invalid-User")
//     }
// }

// function calculateAge(){
//     const dob = new Date(document.getElementById("dob").value);
//     const today= new Date();
//     if(isNaN(dob.getTime())){
//         var error = document.getElementById("output").innerHTML="Please enter a valid date"
//         return error;
//     }

//     let age = today.getFullYear() - dob.getFullYear();
//     const monthDiff = today.getMonth() - dob.getMonth();
    
//     if(monthDiff <0 || (monthDiff === 0 && today.getDate() < dob.getDate()))
//     {   
//         age--;
        
//     }
//     document.getElementById("output").innerHTML="you are" +age + "Years Old"; 
// }
function createLabel(tagname,content,attrname,attrvalue){
    var label=document.createElement(tagname)
    label.innerHTML=content;
    label.setAttribute(attrname,attrvalue);
    return label;
}
const first = createLabel("label","Firstname","for","firstname");
document.body.append(first);
const last = createLabel("label","Lastname","for","lirstname");
document.body.append(last);
const phno = createLabel("label","Phone-Number","for","phonenumber");
document.body.append(phno);
const email = createLabel("label","Email","for","email");
document.body.append(email);

