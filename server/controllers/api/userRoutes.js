const router = require('express').Router();
const { User } = require('../../models');  


router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json({ message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
    console.log('Login route hit');
    console.log('Email:', req.body.email);
    console.log('Password:', req.body.password);

    try {
        const userData = await User.findOne({ email: req.body.email });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email, please try again' });
            return;
        }


        console.log("Password from request:", req.body.password);
        console.log("Hashed password from DB:", userData.password);


        const validPassword = (req.body.password = userData.password);
        console.log(req.body.password)  
        console.log(userData.password)  
        console.log(validPassword)        

        if (!validPassword) {
            return res.status(400).json({ message: 'Incorrect password, please try again' });
        }

        req.session.userId = userData.id;
        req.session.loggedIn = true;

        req.session.save(() => {
            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json({ message: 'An error occurred, please try again' });
    }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {

        req.session.destroy(() => {
            res.status(204).end();
        });

    } else {
        res.status(404).end();
    }
});

module.exports = router;
