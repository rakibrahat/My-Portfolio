function clock () {
    const clockTexts = document.getElementById('clock-texts');
    const clockTexts2 = document.getElementById('clock-texts-2')

    let todayDate = new Date();

    let hour = todayDate.getHours();
    hour = (hour > 12) ? hour - 12 : hour;

    let minutes = todayDate.getMinutes();

    let seconds = todayDate.getSeconds();

    let amPm = (hour > 12) ? "AM" : "PM";

    clockTexts.innerHTML = ("0" + hour).slice(-2) + "  :  " + ("0" + minutes).slice(-2) + "  :  " + ("0" + seconds).slice(-2);
    clockTexts2.innerHTML = " " + amPm;
    
    let timeOut = setInterval(clock, 1000);
}
