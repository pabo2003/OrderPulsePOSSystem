/*==============================================Customer==================================================================*/
/*add customer*/
let customer_arr = [];
$("#Customer-add").on("click", function() {
    let Customer_Name =$("#customerName").val();
    let Customer_NIC =$("#customerNIC").val();
    let Customer_Contact =$("#customerContact").val();

    console.log(Customer_Name);
    console.log(Customer_NIC);
    console.log(Customer_Contact);

    let Customer = {
        id:"C"+( customer_arr.length + 1) ,
        CustomerName : Customer_Name,
        CustomerNIC : Customer_NIC,
        CustomerContact: Customer_Contact
    };
    let existCustomer = false;
    for (let i = 0; i <customer_arr.length; i++) {
        if (customer_arr[i].CustomerNIC === Customer_NIC) {
            existCustomer = true;
            console.log("All ready add Customer");
            break;
        }
    }
    if (!existCustomer) {
        customer_arr.push(Customer);
        console.log(customer_arr);
        loadCustomerTable();
    }

});

const loadCustomerTable = () =>{
    $("#customerTableBody").empty();
    customer_arr.map((item, index) =>{
        console.log(item);
        let data =`<tr><td>${item.id}</td><td>${item.CustomerName}</td><td>${item.CustomerNIC}</td><td>${item.CustomerContact}</td></tr>`
        $("#customerTableBody").append(data);
    });
}