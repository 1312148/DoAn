$(function(){



$('#signup').submit(function(){

var fname = document.signupform.Name.value,
lname = document.signupform.LastName.value,
femail = document.signupform.Email.value,
freemail = document.signupform.enterEmail.value,
fpassword = document.signupform.Password.value,
fmonth = document.signupform.birthday_month.value,
fday = document.signupform.birthday_day.value,
fyear = document.signupform.birthday_year.value;

var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/

if( fname == "" )
{
	document.form.Name.focus() ;
	document.getElementById("errorBox").innerHTML = "enter the first name";
	return false;
}
if( lname == "" )
{
	document.form.LastName.focus() ;
	document.getElementById("errorBox").innerHTML = "enter the last name";
	return false;
}
if (femail == "" )
{
	document.form.Email.focus();
	document.getElementById("errorBox").innerHTML = "enter the email";
	return false;
}else if(!emailRegex.test(femail)){
	document.form.Email.focus();
	document.getElementById("errorBox").innerHTML = "enter the valid email";
	return false;
}
if (freemail == "" )
{
	document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "Re-enter the email";
	return false;
}else if(!emailRegex.test(freemail)){
	document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "Re-enter the valid email";
	return false;
}
if(freemail != femail){
	document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "emails are not matching, re-enter again";
	return false;
}
if(fpassword == "")
{
	document.form.Password.focus();
	document.getElementById("errorBox").innerHTML = "enter the password";
	return false;
}
if (fmonth == "") {
	document.form.birthday_month.focus();
	document.getElementById("errorBox").innerHTML = "select the birthday month";
	return false;
}
if (fday == "") {
	document.form.birthday_day.focus();
	document.getElementById("errorBox").innerHTML = "select the birthday day";
	return false;
}
if (fyear == "") {
	document.form.birthday_year.focus();
	document.getElementById("errorBox").innerHTML = "select the birthday year";
	return false;
}

if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && fmonth != '' && fday != '' && fyear != ''){
	document.getElementById("errorBox").innerHTML = "form submitted successfully";
}
});


// redirect to homepage on new account creation, add short delay so user can read alert window //

//$('#formlogin').submit(function()/*function to check userid & password*/
//{
 /*the following code checkes whether the entered userid and password are matching*/
//if(formlogin.userid.value == "duc" && formlogin.pswrd.value == "duc")
  //{
    //window.open('target.html')/*opens the target page while Id & password matches*/
  //}
 //else
 //{
  //alert("Error Password or Username")/*displays error message*/
  //}
//);


});