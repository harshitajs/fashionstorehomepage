const counterBox1 = document.querySelector('.data-box-1');
const counterBox2 = document.querySelector('.data-box-2');
const counterBox3 = document.querySelector('.data-box-3');

function animateValue(start, end, incrm, duration, elem) {
    const range = end - start;
    const increment = end > start ? incrm : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentValue = start;
  
    const timer = setInterval(function() {
      currentValue += increment;
      elem.textContent = currentValue+'+';
      if (currentValue === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
  
  // Start the animation
  
  animateValue(0, 200, 10, 3000, counterBox1);
  animateValue(0, 2000, 50, 3000, counterBox2);
  animateValue(0, 30000, 500, 5000, counterBox3);