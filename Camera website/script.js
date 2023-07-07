let previewContainer = document.querySelector('.product-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product => {
  product.onclick = () => {
    previewContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBoxes.forEach(preview => {
      let target = preview.getAttribute('data-target');
      if (name === target) {
        preview.classList.add('active');
      } else {
        preview.classList.remove('active');
      }
    });
  };
});

previewBoxes.forEach(preview => {
  let closeButton = preview.querySelector('.fa-times');
  closeButton.onclick = () => {
    previewContainer.style.display = 'none';
    preview.classList.remove('active');
  };
});
