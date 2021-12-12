var customerName = "bob"

let bestCustomer;

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    window.overwriteBestCustomer = "maybe bob";
}
