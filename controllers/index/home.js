function template(req, res) {
    res.render('pages/home', {
        title: 'Home',
        config: req.headers.config,
        signedIn: req.session.uid != undefined ? true : false
    });
}

export default { template };