const table = [
    ["02.06.2021", "Lorem ipsum", "js/icons/js_calendar-plus.png"],
    ["11.06.2021", "Lorem ipsum", "js/icons/js_flask.png"],
    ["15.06.2021", "Lorem ipsum", "js/icons/js_graduation-cap.png"],
    ["22.06.2021", "Lorem ipsum", "js/icons/js_gamepad.png"],
    ["30.06.2021", "Lorem ipsum", "js/icons/js_heartbeat.png"]
];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const numberOfDays = daysInMonth(06, 2021); // 30
const timeline = document.querySelector('#timeline');

table.forEach(entry =>  {
    let procOfTimeline = entry[0].split('.')[0] / numberOfDays * 100;
    let eventDiv = document.createElement('div');
    let eventDate = document.createElement('div');
    let eventName = document.createElement('div');
    let eventIcon = document.createElement('div');
    let rightCont = document.createElement('div');
    let icon = document.createElement('img');
    let iconUrl = `${entry[2]}`;
        icon.setAttribute('src', iconUrl);
    

    eventDiv.classList.add('event-block');
    eventDate.classList.add('event-date');
    eventName.classList.add('event-name');
    eventIcon.classList.add('event-icon');
    rightCont.classList.add('right-cont');

    timeline.appendChild(eventDiv);
    eventDiv.appendChild(eventIcon);
    eventIcon.appendChild(icon);
    eventDiv.appendChild(rightCont);
    rightCont.appendChild(eventDate);
    rightCont.appendChild(eventName);

    eventName.innerHTML = entry[1];
    eventDate.innerHTML = entry[0];

    console.log(procOfTimeline);
}
);
