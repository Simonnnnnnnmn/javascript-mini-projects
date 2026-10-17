function updateTime() {
    const date = new Date();
    let hour = date.getHours().toString().padStart(2, '0');
    const meridiem = hour > 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    const minute = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');



    const dateString = `${hour}:${minute}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = dateString;
}

updateTime();
setInterval(updateTime, 1000);