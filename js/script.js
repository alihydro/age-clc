const output_year = document.querySelector(".output-years");
const output_month = document.querySelector(".output-months");
const output_day = document.querySelector(".output-days");


let isvalid = false;

const intput_year = document.querySelector("#year");
const intput_day = document.querySelector("#day");
const intput_month = document.querySelector("#month");
const submit_btn = document.querySelector(".submit_btn")
// errors 

const error_year = document.querySelector(".error-year");
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
submit_btn.addEventListener("click" , caculateDate);
intput_day.addEventListener("input" , ( e) => {
if (+intput_day.value > 31) {
    error_day.textContent = "must be a valid  date" ;
    isvalid = false;
    return;
} else {
    isvalid = true ;
    error_day.textContent = ""
}
if (+intput_day.value === 0) {
    isvalid = false;
    error_day.textContent = "this filed is required" ;
    isvalid = false;
    return;
}else {
    isvalid = true ;
    error_day.textContent = ""
}
if (+intput_day.value < 0) {
    isvalid = false;
    error_day.textContent = "this filed is required" ;
    isvalid = false;
    return;
}else {
    isvalid = true ;
    error_day.textContent = ""
}

} );

intput_month.addEventListener("input" , ( e) => {
    if (+intput_month.value > 12) {
        error_month.textContent = "must be a valid  date" ;
        isvalid = false;
        return;
    } else {
        isvalid = true ;
        error_day.textContent = ""
    }
    if (+intput_month.value === 0) {
        isvalid = false;
        error_month.textContent = "this filed is required" ;
        isvalid = false;
        return;
    }else {
        isvalid = true ;
        error_month.textContent = ""
    }
    if (+intput_month.value < 0) {
        isvalid = false;
        error_month.textContent = "this filed is required" ;
        isvalid = false;
        return;
    }else {
        isvalid = true ;
        error_month.textContent = ""
    }
    
    } );

    intput_year.addEventListener("input" , ( e) => {
        if (+intput_year.value > 2023) {
            error_year.textContent = "must be a valid  date" ;
            isvalid = false;
            return;
        } else {
            isvalid = true ;
            error_day.textContent = ""
        }
        if (+intput_year.value === 0) {
            isvalid = false;
            error_year.textContent = "this filed is required" ;
            isvalid = false;
            return;
        }else {
            isvalid = true ;
            error_year.textContent = ""
        }
        if (+intput_year.value < 0) {
            isvalid = false;
            error_year.textContent = "this filed is required" ;
            isvalid = false;
            return;
        }else {
            isvalid = true ;
            error_year.textContent = "";
        }
        
        } );

        function caculateDate() {
            if (isvalid) {
                let birthday = `${intput_month.value}/${intput_day.value}/  ${intput_year.value}`;
                console.log(birthday);
                let birthdayobj = new Date(birthday);
                let ageDiffMill = Date.now() - birthdayobj;
                let ageDate =  new Date(ageDiffMill);
                let ageYears = ageDate.getUTCFullYear() -1970; 
                let ageMonth = ageDate.getUTCMonth() ;
                let ageDays = ageDate.getUTCDate() - 1;
                output_day.textContent = ageDays ;
                output_month.textContent = ageMonth ;
                output_year.textContent = ageYears ;
            } else {
                alert("error")
            }
        };
