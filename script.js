let addTask = document.querySelector(".addTask");
let form = document.querySelector(".task-form");
let taskInput = document.querySelector(".task-form input");
let tasks = document.querySelector(".tasks");
let tick = document.querySelector(".tick");
let cut = document.querySelector(".cut");

addTask.addEventListener("click", function () {
    form.classList.toggle("active");
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let inpVal = taskInput.value.trim();

    let task = document.createElement("div");
    task.classList.add("task");

    let h3 = document.createElement("h3");
    h3.textContent = inpVal;

    let right = document.createElement("div");
    right.classList.add("right");

    let tickBtn = document.createElement("button");
    tickBtn.type = "button";
    tickBtn.classList.add("tick");

    let cutBtn = document.createElement("button");
    cutBtn.type = "button";
    cutBtn.classList.add("cut");

    let tickIcon = document.createElement("i");
    tickIcon.classList.add("ri-check-line");

    let cutIcon = document.createElement("i");
    cutIcon.classList.add("ri-close-line");

    tickBtn.appendChild(tickIcon);
    cutBtn.appendChild(cutIcon);
    right.appendChild(tickBtn);
    right.appendChild(cutBtn);
    task.appendChild(h3);
    task.appendChild(right);
    tasks.appendChild(task);
    form.reset();
    form.classList.toggle("active");
})

tasks.addEventListener("click", function (dets) {
    if (dets.target.closest(".cut")) {
        let task = dets.target.closest(".task");
        task.classList.add("cutted");
        setTimeout(() => {
            task.remove();
        }, 2000)
    }
    if (dets.target.closest(".tick")) {
        let task = dets.target.closest(".task");
        task.classList.add("ticked");
        setTimeout(() => {
            task.remove();
        }, 2000);
    }
})
