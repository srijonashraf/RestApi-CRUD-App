ExecCreateProduct = async () => {
    const img = document.querySelector('#img').value;
    const productCode = document.querySelector('#productCode').value;
    const productName = document.querySelector('#productName').value;
    const qty = document.querySelector('#qty').value;
    const totalPrice = document.querySelector('#totalPrice').value;
    const unitPrice = document.querySelector('#unitPrice').value;

    //For Post New Product

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


    //Retrive All Product for checking if any product code matches
    let getUrl = `https://crud.teamrabbil.com/api/v1/ReadProduct`;
    let getConfig = {
        method: 'GET',
    };
    const GetResponse = await axios.get(getUrl, getConfig);
    const GetResult = await GetResponse.data;
    let formattedGetResult = JSON.stringify(GetResult, null, 2);

    try {
        if (img === '' || productCode === '' || productName === '' || qty === '' || totalPrice === '' || unitPrice === '') {
            notifyError('Please fill all the fields');
        }

        else if (formattedGetResult.includes(productCode)) {
            notifyError('Product already exists!');
        }

        else {
            const response = await axios.post(url, bodyData, config);
            console.log(response.data);
            notifySuccess('Product Added!');
            const successMessage = JSON.stringify(bodyData, null, 2);
            console.log(successMessage);
            document.querySelector('#GetProductListTextArea').value = `${successMessage}\n\n---------------------You just added a new product---------------------`;


            // Clear input fields after success
            EmptyCreateProductFields();
            ResetSearchFields();
            EmptyDeleteProductByCode();

        }
    } catch (error) {
        console.error('Error:', error);
    }


}
