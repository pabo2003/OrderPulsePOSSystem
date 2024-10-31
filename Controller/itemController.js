// Import item model
import ItemModel from "../model/itemModel";

let item_arr = [];
let selectItemIndex = null;

const cleanItemFrom = () => {
    $('#itemName').val("");
    $('#itemPrice1').val("");
    $('#itemQty').val("");
};

const loadItemTable = () => {
    $('#itemTableBody').empty();
    item_arr.forEach((item,index)=>{
        const data = `<tr>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
        </tr>`
        $('#itemTableBody').append(data);
    });
        $('#itemTableBody').on('click','tr',function () {
            selectItemIndex = $(this).index();
            console.log("Item Index:-",selectItemIndex);

            //get Item Obj from array
            const item = item_arr[selectItemIndex];
            console.log(item);

            $('#itemName').val(item.name);
            $('#itemPrice1').val(item.price);
            $('#itemQty').val(item.qty);

    });
};