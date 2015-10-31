$(function () {
    console.log('list.js');
    
    var $errorTable = $('#errorTable');
    console.log($errorTable);
    
    var statusClasses = {
        'new' : 'danger',
        'assigned' : 'info',
        'ready' : 'success',
        'rejected' : 'default',
        'pending' : 'warning',
    };
    
    var types = ['new','assigned','ready'];
    
    var rows = {};
    types.forEach(function (type){
       var $tr = $errorTable.find('tbody tr .label-'+statusClasses[type]).closest('tr') 
    });
});