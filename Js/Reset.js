EmptyAll = () => {

    const img = document.querySelector('#img').value = '';
    const productCode = document.querySelector('#productCode').value = '';
    const productName = document.querySelector('#productName').value = '';
    const qty = document.querySelector('#qty').value = '';
    const totalPrice = document.querySelector('#totalPrice').value = '';
    const unitPrice = document.querySelector('#unitPrice').value = '';

    const imgUpdate = document.querySelector('#imgUpdate').value = '';
    const productCodeUpdate = document.querySelector('#productCodeUpdate').value = '';
    const productNameUpdate = document.querySelector('#productNameUpdate').value = '';
    const qtyUpdate = document.querySelector('#qtyUpdate').value = '';
    const totalPriceUpdate = document.querySelector('#totalPriceUpdate').value = '';
    const unitPriceUpdate = document.querySelector('#unitPriceUpdate').value = '';
    const id = document.querySelector('#id').value = '';
    //Empty GetProductList TextArea
    const GetProductList = document.querySelector('#GetProductListTextArea').value = '';
    //Empty DeleteProduct Input Field.
    const DeleteProductByCode = document.querySelector('#DeleteProductByCode').value = '';
}


EmptyCreateProductFields = () => {
    const img = document.querySelector('#img').value = '';
    const productCode = document.querySelector('#productCode').value = '';
    const productName = document.querySelector('#productName').value = '';
    const qty = document.querySelector('#qty').value = '';
    const totalPrice = document.querySelector('#totalPrice').value = '';
    const unitPrice = document.querySelector('#unitPrice').value = '';
}

EmptyUpdateProductFields = () => {
    const imgUpdate = document.querySelector('#imgUpdate').value = '';
    const productCodeUpdate = document.querySelector('#productCodeUpdate').value = '';
    const productNameUpdate = document.querySelector('#productNameUpdate').value = '';
    const qtyUpdate = document.querySelector('#qtyUpdate').value = '';
    const totalPriceUpdate = document.querySelector('#totalPriceUpdate').value = '';
    const unitPriceUpdate = document.querySelector('#unitPriceUpdate').value = '';
    const id = document.querySelector('#id').value = '';
}

EmptyGetProductListArea = () => {
    const GetProductList = document.querySelector('#GetProductListTextArea').value = '';
}

EmptyDeleteProductByCode = () => {
    const DeleteProductByCode = document.querySelector('#DeleteProductByCode').value = '';
}

ResetSearchFields = () => {
    // SearchProduct.value = '';
    SearchProduct.disabled = false;
    SearchResetButton.style = 'display: none !important';
    inputGroupHide.style = 'display: none !important';
}