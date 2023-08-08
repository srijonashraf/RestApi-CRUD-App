
const ExecDeleteProduct = async () => {
    const DeleteProductByCode = document.querySelector('#DeleteProductByCode').value;

    if (DeleteProductByCode.trim().length > 0) {
        try {
            const url = `https://crud.teamrabbil.com/api/v1/ReadProduct`;
            const response = await axios.get(url);
            const allProductData = response.data.data;

            const filteredProduct = allProductData.find(product => product.ProductCode === DeleteProductByCode);

            if (filteredProduct) {
                try {
                    const deleteUrl = `https://crud.teamrabbil.com/api/v1/DeleteProduct/${filteredProduct._id}`;
                    const config = {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        data: {}
                    };

                    try {
                        const deleteResponse = await axios(deleteUrl, config);
                        console.log(deleteResponse.data);
                        notifySuccess('Product Deleted!');
                    } catch (deleteError) {
                        console.error('Delete Error:', deleteError);
                        notifyError('Failed to delete product.');
                    }
                } catch (deleteError) {
                    console.error('Delete URL Error:', deleteError);
                    notifyError('Failed to construct delete URL.');
                }
            } else {
                // Display an error message
                document.querySelector('#GetProductListTextArea').value = 'Product with specified code not found';
            }
        } catch (error) {
            console.error('Error:', error);
            // Display an error message
            document.querySelector('#GetProductListTextArea').value = 'Error fetching product details';
        }
    }
};