import myAlert from "./src/MyAlert.js";
import Storage from "./src/Storage.js";

// All Elements
const add_staff = document.getElementById('add_staff_form');
const staff_data_list = document.querySelector('.staff_data_list');

/**
 *  Submit Form
 */
add_staff.addEventListener('submit', function(e){
    e.preventDefault();

    // Alert message Element
    const alertMessage = document.querySelector('.alertMessage');

    // Form Data Object
    let form_Data = new FormData(e.target);
    let data = Object.fromEntries(form_Data.entries());

    let { name, email, number, location, photo } = data;

    if( name == '' || email == '' || number == '' || location == '' ){
        alertMessage.innerHTML = myAlert.danger('All fields are required');
    }else{
        
       Storage.set('allStaff', data);
       add_staff.reset();
       all_Staff();

    }


})

all_Staff();
function all_Staff(key){
    let allData = Storage.get('allStaff');
    
    let staff_list = '';
    allData.map((data, index) =>{
        let { name, email, number, location, photo } = data;
        staff_list +=`
            <tr>
                <td> ${ index + 1 } </td>
                <td> ${ name } </td>
                <td> ${ email } </td>
                <td> ${ number } </td>
                <td> ${ location } </td>
                <td><img style="width: 50px; height: 50px; object-fit: cover;" src=" ${ photo ? photo : './assets/media/images.png' } " alt="Image"></td>
                <td>
                    <button class="btn btn-sm bg-info"><i class="fa fa-eye" aria-hidden="true"></i></button>
                    <button class="btn btn-sm bg-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></i></button>
                    <button class="btn btn-sm bg-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                </td>
            </tr>
        `;
    })

    staff_data_list.innerHTML = staff_list;

}
