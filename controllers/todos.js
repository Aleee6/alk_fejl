var express = require('express');

var router = express.Router();

//Viewmodel réteg
var statusTexts = {
    'new': 'Új',
    'assigned': 'Hozzárendelve',
    'ready': 'Kész',
    'rejected': 'Elutasítva',
    'pending': 'Felfüggesztve',
};
var statusClasses = {
    'new': 'danger',
    'assigned': 'info',
    'ready': 'success',
    'rejected': 'default',
    'pending': 'warning',
};
function decorateErrors(errorContainer) {
    return errorContainer.map(function (e) {
        e.statusText = statusTexts[e.status];
        e.statusClass = statusClasses[e.status];
        return e;
    });
}
router.get('/', function (req, res) {
    req.app.models.todo.find().then(function (todos) {
        //console.log(errors);

        //megjelenítés
        res.render('todos/list', {
            todos: decorateErrors(todos),
            messages: req.flash('info'),
            name: req.user.name
        });
    });
});
router.get('/list', function (req, res) {
    req.app.models.todo.find().then(function (todos) {
        //console.log(errors);

        //megjelenítés
        res.render('todos/list', {
            todos: decorateErrors(todos),
            messages: req.flash('info'),
            name: req.user.name
        });
    });
});
router.get('/new', function (req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('todos/new', {
        validationErrors: validationErrors,
        data: data,
        name: req.user.name
    });
});
router.post('/new', function (req, res) {
    
    // adatok ellenőrzése
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        
        res.redirect('/todos/new');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.todo.create({
            status: 'new',
            description: req.body.leiras,
            user: req.user,
            username: req.user.name
        })
        .then(function (error) {
            //siker
            req.flash('info', 'Tennivaló sikeresen felvéve!');
            res.redirect('/todos/list');
            
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
    }
});
router.get('/edit/:id', function (req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    req.app.models.todo.findOne({id:'11'}).exec(function findOneCB(err, found){
        
        res.render('todos/edit', {
        validationErrors: validationErrors,
        data: data,
        name: req.user.name,
        todo: found
    });
});
    
});
router.post('/edit/:id', function (req, res) {
    
    // adatok ellenőrzése
    req.sanitizeBody('leiras').escape();
    req.checkBody('leiras', 'Hibás leírás').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        var data = (req.flash('data') || [{}]).pop();
        res.redirect('/todos/edit/{req.params.id}');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.todo.update(
            {id:req.params.id},
            {
            status: 'new',
            description: req.body.leiras,
            user: req.user,
            username: req.user.name
        })
        .then(function (error) {
            //siker
            req.flash('info', 'Tennivaló sikeresen frissítve!');
            res.redirect('/todos/list');
            
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
    }
});
router.get('/delete/:id', function (req, res) {
    req.app.models.todo.destroy({id: req.params.id} )
    .then(function (error) {
            //siker
            req.flash('info', 'Tennivaló sikeresen törölve!');
            res.redirect('/todos/list');
            
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
});
module.exports = router;