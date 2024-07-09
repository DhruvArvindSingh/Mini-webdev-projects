let menu_img = document.getElementById("menu_img");
let menu = document.getElementById("menu");
let no_of_works_demo;
let navbar_stat = 0;
let list_stat = 0;
let present_day;
let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let month = ["null", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
let date = new Date();
let current_year = date.getFullYear();
let current_day = date.getDay();
let current_mon = date.getMonth() + 1;
let current_num = date.getDate();
let output_month = document.getElementById("current_month");
let output_year = document.getElementById("current_year");
let dates = document.getElementById("dates");
let main_body = document.getElementById("calendar");
let list_main_body = document.getElementById("list_main_body");
let date_list_head = document.getElementById("date_list_head");
let day_list_head = document.getElementById("day_list_head");
let all_list_body = document.getElementById("all_list_body");
function Show_navbar() {

    if (navbar_stat == 0) {
        menu.style.transform = "translateX(300px)";
        setTimeout(
            () => {
                navbar_stat = 1;
                menu_img.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>`;

            }, 250
        )
        main_body.style.transform = "translate(230px)"
        if (list_stat == 1) {
            main_body.style.width = "50%";
        }
        else {
            main_body.style.width = "60%";
        }
        console.log(main_body.style.width);


    }
    else if (navbar_stat == 1) {
        menu.style.transform = "translateX(-300px)";
        setTimeout(
            () => {
                navbar_stat = 0;
                menu_img.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>`;

            }, 250
        )
        if (list_stat == 1) {
            main_body.style.width = "60%";
        }
        else {
            main_body.style.width = "70%";
        }
        main_body.style.transform = "translate(0px)"
        console.log(main_body.style.width);



    }

}


// console.log(new Date(2024, 5).getDay());

Create_Cal(current_mon);

function update_upper_cal(months, year) {
    output_month.innerHTML = `${month[months]}`;
    output_year.innerHTML = `${year}`;
}


function Create_Cal(month) {
    current_mon = month;
    year = current_year;
    // if (dates.hasChildNodes()) {
    //     remove();
    // }
    update_upper_cal(month, year);
    let first_day = new Date(year, month - 1).getDay();
    console.log(first_day + ": " + year + ":" + month + ":" + days_in_month(month, year));
    for (let i = 1; i <= 35; i++) {
        if (i < first_day || i >= days_in_month(month, year) + first_day) {
            let new_day = document.createElement("div");
            new_day.innerHTML = " ";
            dates.append(new_day);
        }
        else {
            let new_day = document.createElement("div");
            new_day.innerHTML = `${i - first_day + 1}`;
            new_day.setAttribute("id", `${i - first_day + 1}:${month}:${year}`);
            new_day.setAttribute("onclick", `open_list_main(${i - first_day + 1},${month},${year})`);
            dates.append(new_day);

        }
    }
}


function remove() {
    for (let i = 1; i <= 35; i++) {
        if (dates.hasChildNodes()) {
            dates.removeChild(dates.children[0]);
        }
    }
}


function days_in_month(month, year) {
    return new Date(year, month, 0).getDate();
}

// function back_list_main() {
//     list_stat = 0;
//     list_main_body.style.transform = "translateX(0%)";
//     if (navbar_stat == 1) {
//         main_body.style.width = "60%";
//     }
//     else {
//         main_body.style.width = "70%";

//     }
//     console.log(main_body.style.width);
// }
function open_list_main(day, month_, year) {
    current_day = day;
    if (list_stat == 0) {

        list_stat = 1;
        // console.log(current_day + ":" + current_mon + ":" + current_year)
        date_list_head.innerText = `${day} / ${month[month_]} / ${year}`
        let day_ = new Date(year, month_ - 1, day).getDay();
        // console.log(`${day} : ${month_} : ${year}`)
        // console.log(day_);
        day_list_head.innerText = `${weekdays[day_]}`;
        list_main_body.style.transform = "translateX(-100%)";
        if (navbar_stat == 1) {
            main_body.style.width = "50%";
        }
        else {
            main_body.style.width = "60%";

        }
        console.log(main_body.style.width);
        show_list_work(day, month_, year);
    }
    else if (list_stat == 1) {
        list_stat = 0;
        list_main_body.style.transform = "translateX(0%)";
        if (navbar_stat == 1) {
            main_body.style.width = "60%";
        }
        else {
            main_body.style.width = "70%";

        }
        console.log(main_body.style.width);
        for (let i = 0; i < 10; i++) {
            if (all_list_body.hasChildNodes()) {
                all_list_body.removeChild(all_list_body.firstChild);
            }
        }
    }
    console.log("list_stat :" + list_stat)

}

let n;

function add_work(day, month, year) {
    console.log(day + ":" + month + ":" + year);
    n = document.createElement("input");
    n.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            let i = localStorage.getItem(`no_of_works:${day}/${month}/${year}`);
            console.log(i);
            if (i == null) {
                localStorage.setItem(`no_of_works:${day}/${month}/${year}`, 1);
            } else {
                i = Number.parseInt(i);
                localStorage.setItem(`no_of_works:${day}/${month}/${year}`, (i + 1));
            }
            console.log(i);

            localStorage.setItem(`${day}/${month}/${year}/${i + 1}`, `${n.value}`);
            show_work(day, month, year, 0);
        }
    })
    n.setAttribute("type", "text");
    n.setAttribute("class", "add_work_text");
    // n.setAttribute("onenter", "console.log('Enter');");
    n.setAttribute("id", "add_work_text");
    all_list_body.append(n);
}

function remove_work() {
    let checkbox = document.getElementsByName("tick_box");
    let list = document.getElementsByClassName("all_list_body_work");
    let j = 0;
    console.log(checkbox);
    console.log("= " + no_of_works_demo);
    for (let i = 0; i < 10; i++) {
        if (checkbox[j] == undefined) {
            console.log("break : " + i);
            break;
        }
        if (checkbox[j].checked) {
            localStorage.removeItem(`${current_day}/${current_mon}/${current_year}/${i + 1}`);
            let k = localStorage.getItem(`no_of_works:${current_day}/${current_mon}/${current_year}`)
            if (k == "1") {
                localStorage.removeItem(`no_of_works:${current_day}/${current_mon}/${current_year}`);
            }
            else {
                localStorage.setItem(`no_of_works:${current_day}/${current_mon}/${current_year}`, k - 1);
            }
            list[j].remove();
        }
        else {
            j++;
        }
    }
}

function show_work(day, month, year, all) {
    let work = document.createElement("div");
    let tick_box = document.createElement("input");
    tick_box.setAttribute("type", "checkbox");
    tick_box.setAttribute("class", "tick_box")
    tick_box.setAttribute("name", "tick_box")
    // tick_box.setAttribute("id", `tick_box_${all}`);
    work.setAttribute("class", "all_list_body_work")
    work.setAttribute("id", `all_list_body_work__${day}/${month}/${year}/${all}`)
    if (all == 0) {
        let n_ = document.getElementById("add_work_text");
        work.innerHTML = `<div>${n.value}</div>`;
        if (n != null) {
            n_.remove();
        }
    }
    else {
        work.innerHTML = `<div>${localStorage.getItem(day + "/" + month + "/" + year + "/" + all)}</div>`;
    }
    all_list_body.append(work);
    work.prepend(tick_box);
}

function show_list_work(day, month, year) {
    no_of_works_demo = localStorage.getItem(`no_of_works:${day}/${month}/${year}`);
    console.log(`${n}`);
    for (let i = 1; i <= 10; i++) {
        if (localStorage.getItem(`${day}/${month}/${year}/${i}`)) {
            show_work(day, month, year, i);
            n--;
            if (n == 0) {
                break;
            }
        }
    }

}