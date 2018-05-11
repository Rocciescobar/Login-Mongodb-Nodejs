// Definir modulo a exportar

module.exports = (app, passport) => {

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/login', (req, res) => {
    res.render('login', { // Renderizar mensajes
      message: req.flash('loginMessage')
    });
  });

  app.post('/login', (req, rest) => {});
  
  app.get('/signup', (req, res) => {
    res.render('signup', {
      message: req.flash('signupMessage')
    })

    app.post('/signup', (req, rest) => {});
  });
};