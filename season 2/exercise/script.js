let btn = document.getElementById("timeBtn"); // DOM for showing the time
let tittle = document.getElementById("tittleText"); // for showing the tittle
let datePreview = document.getElementById("date"); //for showing the date in persian
let timePreview = document.getElementById("time"); // for showing the complete date and time
let displayDate = new JDate(); // geting the time and date
let displayTime = displayDate._d; //
let refreshBtn = document.getElementById("refreshTime");
btn.addEventListener("click", function () {
	datePreview.innerHTML = displayDate.date;
	timePreview.innerHTML = displayTime;
	timePreview.classList.remove("hidden");
	datePreview.classList.remove("hidden");
	document.getElementById("subText").classList.remove("hidden");
});
let refresh = function () {
	let newTime = new JDate();
	return newTime;
};
// for the click here Button
refreshBtn.addEventListener("click", function () {
	timePreview.innerHTML = refresh()._d;
});
// for the F5 button
document.addEventListener("keydown", function (e) {
	console.log(e.key);
	if (e.key === "F5") {
		e.preventDefault();
		timePreview.innerHTML = refresh()._d;
	}
});
