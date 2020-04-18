const express = require('express');
const app = express();

app.use(express.static('public'));

app.set("views", "views");
app.set("view engine", "ejs");

const data = require('./data/museum.json');
const image = require('./images/images.json');

app.get('/', function (req, res) {
  res.render('home', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien

  });
});
app.get('/portfolio', function (req, res) {
  res.render('portfolio', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
});
app.get('/contact', function (req, res) {
  res.render('contact', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
});
app.get('/a', function (req, res) {
  res.render('a', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
});
app.get('/b', function (req, res) {
  res.render('b', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/c', function (req, res) {
  res.render('c', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/d', function (req, res) {
  res.render('d', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/e', function (req, res) {
  res.render('e', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/f', function (req, res) {
  res.render('f', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/g', function (req, res) {
  res.render('g', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/h', function (req, res) {
  res.render('h', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/i', function (req, res) {
  res.render('i', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
}); app.get('/j', function (req, res) {
  res.render('j', {
    museum: data.kunstwerken,
    imageURL: image.imageURL,
    een: image.een,
    twee: image.twee,
    drie: image.drie,
    vier: image.vier,
    vijf: image.vijf,
    zes: image.zes,
    zeven: image.zeven,
    acht: image.acht,
    negen: image.negen,
    tien: image.tien
  });
});
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
