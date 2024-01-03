function toggleReadMore(containerId) {
    var dots = document.getElementById(containerId + '-dots');
    var moreText = document.getElementById(containerId + '-more');
    var btn = document.getElementById(containerId + '-myBtn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreText.style.display = 'none';
        btn.innerHTML = 'Read more';
    } else {
        dots.style.display = 'none';
        moreText.style.display = 'inline';
        btn.innerHTML = 'Read less';
    }
}

// Function to hide "Read more" content initially
function hideReadMoreContent(containerId) {
    var moreText = document.getElementById(containerId + '-more');
    moreText.style.display = 'none';
}

// Hide "Read more" content for each container when the page loads
document.addEventListener('DOMContentLoaded', function () {
    hideReadMoreContent('Work1');
    hideReadMoreContent('Work2');
    hideReadMoreContent('Work3');
    // Add more containers as needed
});

// timeline
document.addEventListener("DOMContentLoaded", function() {
  // Setting variables...
  var datesDiv = document.getElementById('dates');
  var issuesDiv = document.getElementById('issues');
  var dates = datesDiv.getElementsByTagName('a');
  var issues = issuesDiv.getElementsByTagName('li');
  var prevButton = document.getElementById('prev');
  var nextButton = document.getElementById('next');
  var howManyDates = dates.length;
  var howManyIssues = issues.length;
  var defaultPositionDates = 0;
  var currentIndex = 0;

  // Set positions based on the orientation...
  // (Assuming horizontal orientation here)
  var widthIssue = issues[0].offsetWidth;
  var widthDate = dates[0].offsetWidth;
  var widthContainer = document.getElementById('timeline').offsetWidth;

  datesDiv.style.marginLeft = widthContainer / 2 - widthDate / 2 + 'px';
  issuesDiv.style.width = widthIssue * howManyIssues + 'px';

  // Function to handle date clicks
  function handleDateClick(event) {
    event.preventDefault();
    var currentIndex = Array.from(dates).indexOf(this);
    moveElements(currentIndex);
  }

  // Attach click event to dates
  Array.from(dates).forEach(function(date, index) {
    date.addEventListener('click', handleDateClick);
  });

  // Function to handle prev/next button clicks
  function handleButtonClick(direction) {
    currentIndex += direction;
    moveElements(currentIndex);
  }

  // Attach click event to prev/next buttons
  prevButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleButtonClick(-1);
  });

  nextButton.addEventListener('click', function(event) {
    event.preventDefault();
    handleButtonClick(1);
  });

  // Function to move elements
  function moveElements(index) {
    currentIndex = index;
    var newPosition = -widthIssue * currentIndex;

    if (newPosition <= -(widthIssue * howManyIssues - widthIssue)) {
      issuesDiv.style.marginLeft = '0px';
      dates[0].click();
    } else {
      issuesDiv.style.marginLeft = newPosition + 'px';
      dates[currentIndex].click();
    }

    updateButtons();
  }

  // Function to update button visibility
  function updateButtons() {
    if (howManyDates === 1) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    } else if (howManyDates === 2) {
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      nextButton.style.display = currentIndex === howManyDates - 1 ? 'none' : 'block';
    } else {
      prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
      nextButton.style.display = currentIndex === howManyDates - 1 ? 'none' : 'block';
    }
  }

  // Default position
  dates[0].click();
});
// end of timeline



// end of timeline
// Initialization for ES Users


// gallery

// function filterImages(category) {
//   const galleryProducts = document.querySelectorAll('.gallery_product');

//   galleryProducts.forEach(product => {
//       if (category === 'all' || product.classList.contains(category)) {
//           product.style.display = 'block';
//       } else {
//           product.style.display = 'none';
//       }
//   });
// }
 
function filterImages(category) {
  const galleryProducts = document.querySelectorAll('.gallery_product');

  galleryProducts.forEach(product => {
      if (category === 'all' || product.classList.contains(category)) {
          $(product).fadeIn('3000'); // Add fadeIn effect
      } else {
          product.style.display = 'none';
      }
  });

  const filterButtons = document.querySelectorAll('.filter-button');
  filterButtons.forEach(button => button.classList.remove('active'));
  document.querySelector(`.filter-button[data-filter="${category}"]`).classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
  const fancyboxElements = document.querySelectorAll('.fancybox');
  fancyboxElements.forEach(element => {
      element.addEventListener('click', function(event) {
          event.preventDefault();
          $.fancybox.open({
              href: element.getAttribute('href'),
              type: 'image'
              // Add more FancyBox options here

          });
      });
  });
});

// end of gallery
// modal
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {
    // Button that triggered the modal
    const button = event.relatedTarget
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')
    const modalBodyInput = exampleModal.querySelector('.modal-body input')

    modalTitle.textContent = `New message to ${recipient}`
    modalBodyInput.value = recipient
  })
}