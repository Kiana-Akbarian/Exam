const data = { 
    adminData:['Admin Data 1' , 'Admin Data 2'],
    clientData:['whatever Data 1' , 'eh Data 2'],
};


exports.adminData = ()=>{
    return data.adminData;
}
exports.clientData = ()=>{
    return data.clientData;
}


exports.addadminData = (newDAta) => {
    data.adminData.push(newDAta);
}