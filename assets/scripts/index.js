function scheduleItems() {
  let schedules = [
    {
      time: "10:30",
      eventName: "Dolphin Presentation",
      position: "is-left"
    },
    {
      time: "11:00",
      eventName: "4D Theater Experience",
      position: "is-right"
    },
    {
      time: "12:30",
      eventName: "Lunch with Great White Shark",
      position: "is-left"
    },
    {
      time: "02:00",
      eventName: "Seals Presentation Show",
      position: "is-right"
    },
    {
      time: "03:30",
      eventName: "Reveal New Megalodon Collection",
      position: "is-left"
    }
  ];

  let scheduleItemsEl = "";
  let scheduleTimelineEl = document.querySelector(".schedule_timeline");

  for (let schedule of schedules) {
    scheduleItemsEl += `<div class="schedule_timeline_item ${schedule.position}">
        <div class="schedule_timeline_item_content">
          <p>${schedule.time}</p>
          <h2>${schedule.eventName}</h2>
          <a href="#">Learn more</a>
        </div>
      </div>`;
  }

  scheduleTimelineEl.insertAdjacentHTML("beforeend", scheduleItemsEl);
}
scheduleItems();
