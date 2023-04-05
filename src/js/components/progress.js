const circles = document.querySelectorAll('.skills-element__circle');


circles.forEach(el => {

  if (el.dataset.percentage == 'true') {
    console.log('circles');

  } else {
    let progress = el.querySelector('.progress');
    let valueBlock = el.querySelector('.skills-element__value');
    let radius = progress.getAttribute('r');
    let circleLength = 2 * Math.PI * radius;

    let percent = el.dataset.percent;

    let percentageProgress = Math.floor(percent);
    valueBlock.textContent = percent + '%';

    progress.setAttribute('stroke-dasharray', circleLength);
    progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
  }
})
