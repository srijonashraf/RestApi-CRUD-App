ExecUpdateProduct = async () => {

    const img = document.querySelector('#imgUpdate').value;
    const productCode = document.querySelector('#productCodeUpdate').value;
    const productName = document.querySelector('#productNameUpdate').value;
    const qty = document.querySelector('#qtyUpdate').value;
    const totalPrice = document.querySelector('#totalPriceUpdate').value;
    const unitPrice = document.querySelector('#unitPriceUpdate').value;
    const id = document.querySelector('#id').value;
    let url = `https://crud.teamrabbil.com/api/v1/UpdateProduct/${id}`;

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
            notifySuccess('Product Updated!');
            const successMessage = JSON.stringify(bodyData, null, 2);
            document.querySelector('#GetProductListTextArea').value = successMessage;
        }
    } catch (error) {
        console.error('Error:', error);
    }


}