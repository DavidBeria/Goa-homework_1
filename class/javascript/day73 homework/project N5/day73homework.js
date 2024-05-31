let age = prompt("თქვენი ასაკი: ")
let HasPermission = false



function IsTeenager() {
    if (age < 18 && HasPermission == false) {
        return("თქვენ არ გაქვთ წვდომა")
    }
    elseif (age >= 18 || HasPermission == true) {
        return("თქვენი წლოვანობა არ შეეფერება/თქვენ არ გაქვთ მოწმობა")
    } else{
        return("თქვენ გაქვთ წდომა")
    }
}