(function() {
  "use strict";

  const typedElement = document.querySelector('.typed');

  if (typedElement?.dataset.typedItems) {
  new Typed('.typed', {
    strings: typedElement.dataset.typedItems.split(','),
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
  }

})();