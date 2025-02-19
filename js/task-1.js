const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Items count: ${categoryItemsCount}`);
});
