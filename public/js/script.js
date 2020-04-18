let iso;

document.addEventListener('DOMContentLoaded', () => {
  /**
 * Initialize Isotope
 */
  var grid = document.querySelector('.grid');
  if (grid) {
    iso = new Isotope(grid, {
      itemSelector: '.element-item',
      layoutMode: 'fitRows',
      getSortData: {
        category: '[data-category]'
      }
    });
  }


  /**
   * Sort by button group
   */
  var sortByGroup = document.querySelector('.sort-by-button-group');
  if (sortByGroup) {
    sortByGroup.addEventListener('click', function (event) {
      // only button clicks
      if (!matchesSelector(event.target, '.button')) {
        return;
      }
      var sortValue = event.target.getAttribute('data-sort-value');
      iso.arrange({ sortBy: sortValue });
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0; i < buttonGroups.length; i++) {
      buttonGroups[i].addEventListener('click', onButtonGroupClick);
    }
  }

  function onButtonGroupClick(event) {
    // only button clicks
    if (!matchesSelector(event.target, '.button')) {
      return;
    }
    var button = event.target;
    button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
    button.classList.add('is-checked');
  }



  /**
   * Bind filter button group
   */
  var filtersElem = document.querySelector('.filters-button-group');

  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, 'button')) {
        return;
      }
      var filterValue = event.target.getAttribute('data-filter');
      if (filterValue !== '*') { filterValue = '.' + filterValue }
      iso.arrange({ filter: filterValue });
    });
  }



  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  if (buttonGroups) {
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
  }

  function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function (event) {
      // only work with buttons
      if (!matchesSelector(event.target, 'button')) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }

});