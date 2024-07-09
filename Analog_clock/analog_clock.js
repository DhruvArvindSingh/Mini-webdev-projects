let hour_hand = document.getElementById("hour");
let min_hand = document.getElementById("min");
let sec_hand = document.getElementById("sec");

// let h_time = Date().getHours();
// console.log(d);
setInterval(() => {
    let d = new Date();
    let h_time;
    if (d.getHours() >= 12) {
        h_time = d.getHours() - 12;
    }
    else {
        h_time = d.getHours();
    }
    let m_time = d.getMinutes();
    let s_time = d.getSeconds();
    let h_deg = (h_time * 30) + (m_time / 2);
    let m_deg = (m_time * 6);
    let s_deg = (s_time * 6);
    // console.log(`${h_deg} : ${m_deg} : ${s_deg}`);
    hour_hand.style.transform = `rotate(${h_deg}deg)`;
    min_hand.style.transform = `rotate(${m_deg}deg)`;
    sec_hand.style.transform = `rotate(${s_deg}deg)`;
    // console.log(`${h_time} : ${m_time} : ${s_time}`);


    // console.log(s_time);

}, 1000);
