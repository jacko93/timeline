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
        eventDiv.setAttribute('proc', procOfTimeline);
    let eventDate = document.createElement('div');
    let eventName = document.createElement('div');
    let eventIcon = document.createElement('div');
    let rightCont = document.createElement('div');
    let icon = document.createElement('img');
    let iconUrl = `${entry[2]}`;
        icon.setAttribute('src', iconUrl);

    let timelineAdd = document.createElement('div');
    timelineAdd.classList.add('timer');
    let bar = document.createElement('div');
    bar.classList.add('bar');
    
    eventDiv.classList.add('event-block');
    eventDate.classList.add('event-date');
    eventName.classList.add('event-name');
    eventIcon.classList.add('event-icon');
    rightCont.classList.add('right-cont');

    timeline.appendChild(eventDiv);
    timeline.appendChild(timelineAdd);
    timelineAdd.appendChild(bar);
    eventDiv.appendChild(eventIcon);
    eventIcon.appendChild(icon);
    eventDiv.appendChild(rightCont);
    rightCont.appendChild(eventDate);
    rightCont.appendChild(eventName);

    eventName.innerHTML = entry[1];
    eventDate.innerHTML = entry[0];

// If viewport > 801px
var viewportWidth = window.innerWidth;

if (viewportWidth > 800) {
    eventDiv.style.left = `calc(${procOfTimeline}% - 40px)`;

    let eventIcons = document.querySelectorAll('.event-icon');
    
    eventIcons.forEach(eventIcons => eventIcons.addEventListener('mouseover', function() {
        let bars = document.querySelector('.bar');
        let barWidth = eventIcons.closest('.event-block').getAttribute('proc');
            bars.style.width = `calc(${barWidth}% - 20px)`;
        let rightc = eventIcons.nextSibling;
            rightc.classList.add('current');
    })
    );


} else {
    // Nothing
}

}); // End of main loop




