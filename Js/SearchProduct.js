const SearchProductButton = document.querySelector('#SearchProductButton');
const SearchProductByCode = document.querySelector('#SearchProductByCode');
const inputGroupHide = document.querySelector('#inputGroupHide');
const SearchResetButton = document.querySelector('#SearchResetButton');
const productDetailsTextArea = document.querySelector('#productDetailsTextArea'); // Assuming this is the element where you show messages
const UpdateProductButton = document.querySelector('#UpdateProductButton');
let filter_id = '';


SearchProduct = async (event) => {
    event.preventDefault();

    if (SearchProductByCode.value.trim().length > 0) {
        const SearchProductValue = SearchProductByCode.value.trim();

        try {
            const url = `https://crud.teamrabbil.com/api/v1/ReadProduct`;
            const response = await axios.get(url);
            const allProductData = await response.data.data; // Accessing the "data" array

            const filteredProduct = await allProductData.find(product => product.ProductCode === SearchProductValue);

            if (filteredProduct) {
                // Update input fields with fetched product data
                document.querySelector('#imgUpdate').value = filteredProduct.Img;
                document.querySelector('#productCodeUpdate').value = filteredProduct.ProductCode;
                document.querySelector('#productNameUpdate').value = filteredProduct.ProductName;
                document.querySelector('#qtyUpdate').value = filteredProduct.Qty;
                document.querySelector('#totalPriceUpdate').value = filteredProduct.TotalPrice;
                document.querySelector('#unitPriceUpdate').value = filteredProduct.UnitPrice;
                document.querySelector('#GetProductListTextArea').value = JSON.stringify(filteredProduct, null, 2);
                document.querySelector('#id').value = filteredProduct._id;
                filter_id = filteredProduct._id;

                // Display the input fields container
                inputGroupHide.style.display = 'block';
                UpdateProductButton.style.display = 'block';

            }
            else if (filteredProduct === undefined) {
                notifyError('Product Not Found Check From "GetProductList"');
                SearchProductByCode.value = '';
                inputGroupHide.style = 'display: none !important';
                UpdateProductButton.style.display = 'none';
                EmptyUpdateProductFields();
                EmptyGetProductListArea();

            }

        } catch (error) {
            console.error('Error:', error);
            // Display an error message
            document.querySelector('#GetProductListTextArea').value = 'Error fetching product details';
        }
    }

}