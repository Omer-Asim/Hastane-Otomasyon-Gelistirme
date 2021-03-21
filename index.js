const mysql = require("mysql");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
var session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/dosyalar"));
app.use(bodyParser.json());
var connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '12344321',
    database: 'hastane'
});
app.use(session({
    secret: 'omer asim',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: true
    }
}))

connection.connect(function (err) {
    if (err) throw err;
    console.log("MYSQL'e bağlandı..");
}); 


app.get("/anasayfa" , function(req ,res){
    res.render("anasayfa")
});
 



app.get("/", function (req, res) {
    res.render("girisyap")
});

app.get("/hastarandevu", function (req, res) {
    connection.query("SELECT * FROM hastane.polikinikler", function (err, results, fields) {
        if (err) throw err;

        res.render("hasta-randevu", {
            deneme: results
        })
    });


});


app.get("/randevu", function (req, res) {
    res.render("randevu")
});

app.get("/kayit", function (req, res) {
    res.render("kayitOl");
});

app.post("/kayit-formu", function (req, res) {

    var mail = req.body.mail;
    var sifre = req.body.sifre;
    console.log(req.body);
    var sql = "INSERT INTO hastane.giris(mail ,sifre) VALUES('" + mail + "' , '" + sifre + "')";
    connection.query(sql, function (err, results, fields) {
        if (err) throw err;

        // console.log(results);
        res.redirect("/randevu");
    })
});

app.post("/formgonder", function (req, res) {
    var tc = req.body.tc;
    var isim = req.body.isim;
    var soyisim = req.body.soyisim;
    var dogumtarihi = req.body.dogumTarihi;
    var randevutarihi = req.body.randevutarihi;
    var polikinik = req.body.polikinik;
    var randevuSaati = req.body.randevuSaati;
    console.log(req.body);

    var sql = "INSERT INTO hastane.hastalar (isim ,soyisim, tc ,dogumtarihi ,randevuSaati) VALUES ('" + isim + "' , '" + soyisim + "' , '" + tc + "','" + dogumtarihi + "' , '" + randevuSaati + "')";
    connection.query(sql, function (err, results, fields) {
        if (err) throw err;

        // console.log(results);
        var yeniHastaId = results.insertId;

        sql = "INSERT INTO hastane.randevu ( tarih, hastaId, polikinikId) VALUES ('" + randevutarihi + "' , " + yeniHastaId + " , " + polikinik + ")";
        connection.query(sql, function (err, results, fields) {
            if (err) throw err;
            res.redirect("/randevu");
        });



    });
});

app.post("/kullanici-girisi", function (req, res) {

    var mailGelen = req.body.mail;
    var sifreGelen = req.body.sifre;

    var sql3 = "SELECT * FROM hastane.giris WHERE mail='" + mailGelen + "'";
    console.log(sql3);

    connection.query(sql3, function (err, results, fields) {
        if (err) throw err;
        if (results.length > 0) {
            if (results[0].sifre == sifreGelen) {

                res.redirect("/admin"); // cookie göndermem gerek 
            } else {
                res.send("HATALI ŞİFRE");
            }

        } else {
            res.send("HATALI MAİL")
        }

        // console.log(results);


    });

});

app.get("/admin", function (req, res) {
    connection.query("SELECT * FROM hastane.hastalar", function (err, results, fields) {
        if (err) throw err;
        // console.log(results);
        
    
        // var isimler=results;
        // var soyisimler=results;
        // var tcNo=results;
        // var dogumTarihi=results;
        // var randevu=results;
        // var Id=results;

        res.render("admin", {hastalar :results
            // isim: isimler,
            // soyisim:soyisimler,
            // tc:tcNo,
            // dogumtarihi:dogumTarihi,
            // randevuSaati:randevu,
            // soyisim:soyisimler,
            // hastaId:Id
        });
    });





});

app.get("/yazisil" , function(req ,res){
    var id=req.query.hastaId;
    console.log(id);
    var sql="DELETE from hastane.hastalar WHERE hastaId =" +id ;
    console.log(sql);
    connection.query(sql, function(err ,results ,fields){
        
        res.redirect("/admin")
    });
});

app.listen(8000);











// var hastaSoyisim = results[0].soyisim;
// var randevuSaati = results[0].randevuSaati;
// hastaSoyisim: results,
// randevuSaati: results


































// app.get("/", function (req, res) {

//     connection.query("SELECT * FROM hastane.hastalar", function (err, results, fields) {
//         if (err) throw err;

//         var sonuc = results;
//         res.render("anasayfa", {
//             hastalar: sonuc
//         });
//     });

// });



// app.get("/sayfa-2", function (req, res) {
//     res.sendFile(__dirname + "/views/sayfa-2.html");
// });


// app.post("/veritabanina-yolla", function (req, res) {
//     var tc = req.body.tc;
//     var isim = req.body.isim;
//     var soyisim = req.body.soyisim;
//     var dogumtarihi = req.body.dogumtarihi;


//     console.log(req.body);

// connection.query("SELECT adi FROM hastane.polikinikler" , function(err, results2,fields){
//     var polikinikler=req.body.polikinik;



// res.render("anasayfa" , {polikinikler: results2})
// });


// var sql = "INSERT INTO hastane.hastalar (isim, soyisim, tc ,dogumtarihi) VALUES ('" + isim + "', '" + soyisim + "' , '" + tc + "' ,'" + dogumtarihi + "')";
// console.log(sql);
// connection.query(sql, function (err, results, fields) {
//     res.redirect("/sayfa-2");

//     });
// });