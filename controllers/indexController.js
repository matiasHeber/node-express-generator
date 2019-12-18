const indexController = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
    },
    contacto: (req,res) => {
        res.render('contacto');
    }
} 

module.exports = indexController