let url = "https://drive.google.com/file/d/1-oaxT0IT-MXWG6X2dOSM7H_1hwYpRS5F/view"
// let sub = document.getElementById("Sub")
let checker = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

const result = checker.test(url)
console.log(result)
// const dis = document.querySelector("h3");
// if(result == true)
// {
//     dis.textContent = "Valid Url"
// }
// else
// {
//     dis.textContent = "Invalid Url"
// }