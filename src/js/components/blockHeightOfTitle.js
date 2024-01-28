function hideExcessButtons() {
  function updateButtons() {
    const cardContents = document.querySelectorAll('.card-concert__content');

    cardContents.forEach(content => {
      const containerHeight = content.offsetHeight;
      const title = content.querySelector('.card-concert__title');
      const buttons = content.querySelectorAll('.buttons-banner__item');
      const titleHeight = title.offsetHeight;
      const buttonsBannerHeight = content.querySelector('.buttons-banner').offsetHeight;

      let currentHeight = titleHeight;
      let excessButtons = 0;
      let itemMoreButtonHeight = 0;
      const itemMoreButtonsContainer = content.querySelector('.item-more__buttons');
      const itemMoreButton = content.querySelector('.item-more');
      const itemMoreNum = content.querySelector('.item-more__num');

      buttons.forEach(button => {
        if (button.classList.contains('item-more')) {
          itemMoreButtonHeight = button.offsetHeight;
          button.addEventListener('click', () => {
            const itemMoreInner = content.querySelector('.item-more__inner');
            itemMoreInner.classList.toggle('active');
            checkItemMoreInner(itemMoreInner);
          });

          const itemMoreClose = button.querySelector('.item-more__close');
          itemMoreClose.addEventListener('click', (event) => {
            event.stopPropagation();
            const itemMoreInner = content.querySelector('.item-more__inner');
            itemMoreInner.classList.remove('active');
            checkItemMoreInner(itemMoreInner);
          });

          return;
        }

        currentHeight += button.offsetHeight;
        if (currentHeight > containerHeight - itemMoreButtonHeight) {
          button.classList.add('hidden-button');
          excessButtons++;
          itemMoreButtonsContainer.appendChild(button);
        }
      });

      if (excessButtons > 0) {
        itemMoreButton.classList.remove('hidden-button');
        itemMoreNum.textContent = excessButtons;
      } else {
        itemMoreButton.classList.add('hidden-button');
      }

      function checkItemMoreInner(itemMoreInner) {
        const isEmpty = !itemMoreInner.querySelector('*');
        if (isEmpty && excessButtons === 0) {
          itemMoreButton.classList.add('hidden-button');
        } else {
          itemMoreButton.classList.remove('hidden-button');
        }
      }
    });
  }

  window.addEventListener('resize', updateButtons);
  updateButtons();
}

hideExcessButtons();

//function hideExcessButtons() {
//  function updateButtons() {
//    const cardContents = document.querySelectorAll('.card-concert__content');

//    cardContents.forEach(content => {
//      const containerHeight = content.offsetHeight;
//      const title = content.querySelector('.card-concert__title');
//      const buttons = content.querySelectorAll('.buttons-banner__item');
//      const titleHeight = title.offsetHeight;
//      const buttonsBanner = content.querySelector('.buttons-banner');
//      const buttonsBannerHeight = buttonsBanner.offsetHeight;
//      const itemMoreButton = content.querySelector('.item-more');
//      const itemMoreNum = content.querySelector('.item-more__num');

//      let currentHeight = titleHeight;
//      let excessButtons = 0;
//      let itemMoreButtonHeight = 0;
//      const itemMoreButtonsContainer = content.querySelector('.item-more__buttons');

//      buttons.forEach(button => {
//        if (button.classList.contains('item-more')) {
//          itemMoreButtonHeight = button.offsetHeight;
//          button.addEventListener('click', () => {
//            const itemMoreInner = content.querySelector('.item-more__inner');
//            itemMoreInner.classList.toggle('active');
//            checkItemMoreInner(itemMoreInner);
//          });

//          const itemMoreClose = button.querySelector('.item-more__close');
//          itemMoreClose.addEventListener('click', (event) => {
//            event.stopPropagation();
//            const itemMoreInner = content.querySelector('.item-more__inner');
//            itemMoreInner.classList.remove('active');
//            checkItemMoreInner(itemMoreInner);
//          });

//          return;
//        }

//        currentHeight += button.offsetHeight;
//        console.log(buttonsBannerHeight)
//        if (buttonsBannerHeight > 0) {
//          button.classList.add('hidden-button');
//          excessButtons++;
//          itemMoreButtonsContainer.appendChild(button);
//        }
//      });

//      if (excessButtons > 0) {
//        itemMoreButton.classList.remove('hidden-button');
//        itemMoreNum.textContent = excessButtons;
//      } else {
//        itemMoreButton.classList.add('hidden-button');
//      }

//      function checkItemMoreInner(itemMoreInner) {
//        const isEmpty = !itemMoreInner.querySelector('*');
//        if (isEmpty && excessButtons === 0) {
//          itemMoreButton.classList.add('hidden-button');
//        } else {
//          itemMoreButton.classList.remove('hidden-button');
//        }
//      }
//    });
//  }

//  window.addEventListener('resize', updateButtons);
//  updateButtons();
//}

//hideExcessButtons();


