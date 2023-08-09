// SearchResetButton.addEventListener('click', () => {
//     SearchProduct.value = '';
//     SearchProduct.disabled = false;
//     SearchResetButton.style.display = 'none';
//     inputGroupHide.style = 'display: none !important';
//     document.querySelector('#GetProductListTextArea').value = ''; // Clear any previous messages

// });

function resetSearchFields() {
    SearchProduct.value = '';
    SearchProduct.disabled = false;
    SearchResetButton.style = 'display: none !important';
    inputGroupHide.style = 'display: none !important';
    document.querySelector('#GetProductListTextArea').value = ''; // Clear any previous messages
}
