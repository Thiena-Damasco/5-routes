const print = {
    ln:(req, res) =>{
        res.render('index');
    },
    nm:(req, res) =>{
        res.render('about');
    },
    com:(req, res) =>{
        res.render('contact');
    },
    gram:(req, res) =>{
        res.render('gmail');
    },
    book:(req, res) =>{
        res.render('facebook');
    },

}

module.exports = print;