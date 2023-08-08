
ExecGetProductList = async () => {
    let url = "https://crud.teamrabbil.com/api/v1/ReadProduct";
    let config = {
        method: 'GET',
    }
    try {
        let response = await axios.get(url, config);
        let result = await response.data;
        let formattedResult = JSON.stringify(result, null, 2); // 2 spaces for indentation
        document.querySelector('#GetProductListTextArea').value = formattedResult;
        document.querySelector('#GetProductListTextArea').disabled = true;
        document.querySelector('#GetProductListTextArea').style = 'background-color: rgb(255, 255, 255)';

    } catch (error) {
        console.error('Error:', error);
    }

}