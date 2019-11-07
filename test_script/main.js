exports.public_test = (data, callback) => {
    // TODO implement


    console.log("Public Test from Khufu", data)

    callback(null, 'Hello from Lambda');


};


exports.admin_test = (data, callback) => {
    // TODO implement


    console.log("Admin Test from Khufu", data)

    callback(null, 'Hello from Lambda');


};

exports.after_create_client_trigger = (data, callback) => {
    // TODO implement


    console.log("After creating the client", data)

    callback(null, {success:false, connection_down: true});


};

exports.after_update_client_trigger = (data, callback) => {
    // TODO implement


    console.log("After updating the client", data)

    data.client.$getInteractions().then(function(result) {
        console.log("***GOT SOME INTERACTIONS", result);
    });


    callback(null, {success:true, connection_down: false});


};

exports.after_create_booking_trigger = (data, callback) => {
    // TODO implement
    console.log("After creating the booking", data)
    callback(null, {success:false, connection_down: true});
};

exports.after_update_booking_trigger = (data, callback) => {
    // TODO implement
    console.log("After updating the booking", data)
    callback(null, {success:true, connection_down: false});
};

exports.after_delete_booking_trigger = (data, callback) => {
    // TODO implement
    console.log("After deleting the booking", data)
    callback(null, {success:false, connection_down: true});
};
