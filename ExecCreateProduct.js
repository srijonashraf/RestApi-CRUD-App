ExecCreateProduct = async () => {
    const img = document.querySelector('#img').value;
    const productCode = document.querySelector('#productCode').value;
    const productName = document.querySelector('#productName').value;
    const qty = document.querySelector('#qty').value;
    const totalPrice = document.querySelector('#totalPrice').value;
    const unitPrice = document.querySelector('#unitPrice').value;

    console.log(img, productCode, productName, qty, totalPrice, unitPrice);

    let url = 'https://crud.teamrabbil.com/api/v1/CreateProduct';
    let bodyData = {
        Img: img,
        ProductCode: productCode,
        ProductName: productName,
        Qty: qty,
        TotalPrice: totalPrice,
        UnitPrice: unitPrice
    };

    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: bodyData
    };

    try {
        if (img === '' || productCode === '' || productName === '' || qty === '' || totalPrice === '' || unitPrice === '') {
            notifyError('Please fill all the fields');
        } else {
            const response = await axios.post(url, bodyData, config);
            console.log(response.data);
            notifySuccess('Product Added!');
            const successMessage = JSON.stringify(bodyData, null, 2);
            document.querySelector('#GetProductListTextArea').value = successMessage;

            // Clear input fields after success
            document.querySelector('#img').value = '';
            document.querySelector('#productCode').value = '';
            document.querySelector('#productName').value = '';
            document.querySelector('#qty').value = '';
            document.querySelector('#totalPrice').value = '';
            document.querySelector('#unitPrice').value = '';
        }
    } catch (error) {
        console.error('Error:', error);
    }


}
