/*
//Customer page

//customer array
let cusArray = [];

const loadCustomerTable = () =>{
    $("#customerTableBody").empty();
    cusArray.map((item, index)=>{
        console.log(item);
        let data = `<tr>
            <td>${item.name}</td>
            <td>${item.nicNo}</td>
            <td>${item.contact}</td>
        </tr>`
        $("#customerTableBody").append(data);
    })
}

//Add customer
$("#customerAddBtn").on("click",function () {
    let name = $('#customerName').val();
    let nicNo = $('#customerNIC').val();
    let contact = $('#customerContact').val();

    console.log("Name:",name);
    console.log("NIC No:",nicNo);
    console.log("Contact No:",contact);

    let customer = {
        id: cusArray.length + 1,
        name: name,
        nicNo: nicNo,
        contact: contact
    };

    cusArray.push(customer);

    loadCustomerTable();
})*/
