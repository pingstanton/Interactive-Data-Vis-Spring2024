// set initial variables...
let clickCount = document.getElementById('numClicks');
let clickButton = document.getElementById('clickButton');
let count = 0;

// conditional display of count in numClicks <div> ...
function updateCount() {
	if (count === 0) {
		clickCount.textContent = "The button has not yet been clicked. Count is currently 0.";
		}
    else if (count === 1) {
		clickCount.textContent = "The button has been clicked once. Count is currently 1.";
		}
	else if (count > 1) {
		clickCount.textContent = "The button has now been clicked " + count + " times.";
		}
	}

// increase count function...
function handleClick() {
	count = count + 1;
	updateCount();
}
    
// click event listener...
subbtn.addEventListener('click', handleClick);
