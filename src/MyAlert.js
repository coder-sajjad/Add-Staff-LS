
// Custom Alert Message
class myAlert {

    // Danger Alert
    static danger( message ){
        return `<p class="alert alert-danger d-flex justify-content-between"> ${ message } <button class="btn btn-close" data-bs-dismiss="alert"></button></p>`
    }

    // Warning Alert
    static warning( message ){
        return `<p class="alert alert-warning d-flex justify-content-between"> ${ message } <button class="btn btn-close" data-bs-dismiss="alert"></button></p>`
    }

    // Success Alert
    static success( message ){
        return `<p class="alert alert-success d-flex justify-content-between"> ${ message } <button class="btn btn-close" data-bs-dismiss="alert"></button></p>`
    }

}

export default myAlert;
