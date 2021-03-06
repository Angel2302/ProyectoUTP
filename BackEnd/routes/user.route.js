const express = require('express');
const bcrypt = require('bcrypt');
const userSchema = require('../models/Users');
const jwt = require('jsonwebtoken');
const transporter = require('../config/transporter');

const router = express.Router();

router.post('/add-user', (req, res) => {
    let form = req.body;
    console.log(form);
    if (form.nombre != '' && form.apellidos != '' && form.email != '' && form.password != '' && form.confirmPassword != '') {
        if (form.password === form.confirmPassword) {
            userSchema.findOne({ email: form.email }, (err, data) => {
                if (!err) {
                    if (!data) {
                        bcrypt.hash(form.password, 10, (err, hash) => {
                            if (!err) {
                                form.password = hash;
                                userSchema.create(form, (err, data) => {
                                    if (!err) {
                                        console.log(data);
                                        res.status(200).json(data);
                                    } else {
                                        console.log(err);
                                        res.send({
                                            message: `[ERROR]: ${err}`
                                        }).status(500);
                                    }
                                });
                            } else {
                                console.log(err);
                                res.send({
                                    message: `[ERROR]: ${err}`
                                }).status(500);
                            }
                        });
                    } else {
                        console.log(data);
                        res.send({
                            message: 'Ya existe un usuario con este email'
                        }).status(409);
                    }
                } else {
                    console.log(err);
                    res.send({
                        message: `[ERROR]: ${err}`
                    }).status(500);
                }
            });
        } else {
            res.send({
                message: 'Las contrase??as no coinciden'
            }).status(400);
        }
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

router.get('/list-users', (req, res) => {
    userSchema.find((err, data) => {
        if (!err) {
            console.log(data);
            res.status(200).json(data);
        } else {
            console.log(err);
            res.send({
                message: `[ERROR]: ${err}`
            }).status(500);
        }
    });
});

router.put('/update-user/:id', (req, res) => {
    let id = req.params.id;
    let form = req.body;
    if (form.password != '' && form.confirmPassword != '') {
        if (form.password === form.confirmPassword) {
            bcrypt.hash(form.password, 10, (err, hash) => {
                if (!err) {
                    userSchema.findByIdAndUpdate(id, { $set: { password: hash } }, (err, data) => {
                        if (!err) {
                            if (data) {
                                console.log(data);
                                res.status(200).json(data);
                            } else {
                                console.log(`No se encontr?? el usuario`);
                                res.send({
                                    message: `No se encontr?? el usuario}`
                                }).status(409);
                            }
                        } else {
                            console.log(err);
                            res.send({
                                message: `[ERROR]: ${err}`
                            }).status(500);
                        }
                    });
                } else {
                    console.log(err);
                    res.send({
                        message: `[ERROR]: ${err}`
                    }).status(500);
                }
            });
        } else {
            res.send({
                message: 'Las contrase??as no coinciden'
            }).status(400);
        }
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

router.delete('/delete-user/:id', (req, res) => {
    let id = req.params.id;
    if (id != '') {
        userSchema.findByIdAndDelete(id, (err, data) => {
            if (!err) {
                if (data) {
                    console.log(data);
                    res.status(200).send({
                        message: "Usert Deleted"
                    });
                } else {
                    console.log(`No existe el usuario`);
                    res.send({
                        message: `No existe el usuario`
                    }).status(409);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe proporcionar un id'
        }).status(400);
    }
});

router.post('/login', (req, res) => {
    let form = req.body;
    let filter = {};
    if (form.username != '' && form.password != '') {
        if (form.username.indexOf('@') != -1) {
            filter = {
                email: form.username
            }
        } else {
            filter = {
                nombreUsuario: form.username
            }
        }
        userSchema.findOne(filter, (err, data) => {
            if (!err) {
                if (data) {
                    bcrypt.compare(form.password, data.password, (err, result) => {
                        if (!err) {
                            if (result) {
                                const payload = {
                                    id: data._id,
                                    nombre: data.nombre
                                }
                                jwt.sign(payload, 'secretKeyJWT', {
                                    expiresIn: 300
                                }, (err, token) => {
                                    if (!err) {
                                        console.log({
                                            auth: true,
                                            token
                                        });
                                        res.status(200).json({
                                            auth: true,
                                            token
                                        });
                                    } else {
                                        console.log(err);
                                        res.send({
                                            message: `[ERROR]: ${err}`
                                        }).status(500);
                                    }
                                });
                            } else {
                                console.log('Incorrect Password');
                                res.send({
                                    message: 'Incorrect Password'
                                }).status(400);
                            }
                        } else {
                            console.log(err);
                            res.send({
                                message: `[ERROR]: ${err}`
                            }).status(500);
                        }
                    });
                } else {
                    console.log('Incorrect email');
                    res.send({
                        message: 'Incorrect email'
                    }).status(400);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe llenar los campos Obligatorios'
        }).status(400);
    }
});

router.post('/get-change-password', (req, res) => {
    let form = req.body;
    if (form.email != '') {
        userSchema.findOne({ email: form.email }, (err, data) => {
            if (!err) {
                if (data) {
                    const payload = {
                        id: data._id,
                        nombre: data.nombre
                    }
                    jwt.sign(payload, 'secretKeyJWT', {
                        expiresIn: 300
                    }, async(err, token) => {
                        if (!err) {
                            try {
                                await transporter.sendMail({
                                    from: "The Green List - Forgot Password",
                                    to: form.email,
                                    subject: `FORGOT PASSWORD THE GREEN LIST`,
                                    html: `<!DOCTYPE html>
                                    <html lang="en">
                                    
                                    <head>
                                        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
                                        <style>
                                            body {
                                                margin: 0;
                                                padding: 0;
                                                -webkit-text-size-adjust: none;
                                                -ms-text-size-adjust: none;
                                            }
                                            
                                            img {
                                                line-height: 100%;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                            }
                                            
                                            a img {
                                                border: none;
                                            }
                                            
                                            #backgroundTable {
                                                margin: 0;
                                                padding: 0;
                                                width: 100% !important;
                                            }
                                            
                                            a,
                                            a:link {
                                                color: #2A5DB0;
                                                text-decoration: underline;
                                            }
                                            
                                            table td {
                                                border-collapse: collapse;
                                            }
                                            
                                            span {
                                                color: inherit;
                                                border-bottom: none;
                                            }
                                            
                                            span:hover {
                                                background-color: transparent;
                                            }
                                        </style>
                                    
                                        <style>
                                            .scalable-image img {
                                                max-width: 100% !important;
                                                height: auto !important
                                            }
                                            
                                            .button a {
                                                transition: background-color .25s, border-color .25s
                                            }
                                            
                                            .button a:hover {
                                                background-color: #e1e1e1 !important;
                                                border-color: #0976a5 !important
                                            }
                                            
                                            @media only screen and (max-width: 400px) {
                                                .preheader {
                                                    font-size: 12px !important;
                                                    text-align: center !important
                                                }
                                                .header--white {
                                                    text-align: center
                                                }
                                                .header--white .header__logo {
                                                    display: block;
                                                    margin: 0 auto;
                                                    width: 118px !important;
                                                    height: auto !important
                                                }
                                                .header--left .header__logo {
                                                    display: block;
                                                    width: 118px !important;
                                                    height: auto !important
                                                }
                                            }
                                            
                                            @media screen and (-webkit-device-pixel-ratio),
                                            screen and (-moz-device-pixel-ratio) {
                                                .sub-story__image,
                                                .sub-story__content {
                                                    display: block !important
                                                }
                                                .sub-story__image {
                                                    float: left !important;
                                                    width: 200px
                                                }
                                                .sub-story__content {
                                                    margin-top: 30px !important;
                                                    margin-left: 200px !important
                                                }
                                            }
                                            
                                            @media only screen and (max-width: 550px) {
                                                .sub-story__inner {
                                                    padding-left: 30px !important
                                                }
                                                .sub-story__image,
                                                .sub-story__content {
                                                    margin: 0 auto !important;
                                                    float: none !important;
                                                    text-align: center
                                                }
                                                .sub-story .button {
                                                    padding-left: 0 !important
                                                }
                                            }
                                            
                                            @media only screen and (max-width: 400px) {
                                                .featured-story--top table,
                                                .featured-story--top td {
                                                    text-align: left
                                                }
                                                .featured-story--top__heading td,
                                                .sub-story__heading td {
                                                    font-size: 18px !important
                                                }
                                                .featured-story--bottom:nth-child(2) .featured-story--bottom__inner {
                                                    padding-top: 10px !important
                                                }
                                                .featured-story--bottom__inner {
                                                    padding-top: 20px !important
                                                }
                                                .featured-story--bottom__heading td {
                                                    font-size: 28px !important;
                                                    line-height: 32px !important
                                                }
                                                .featured-story__copy td,
                                                .sub-story__copy td {
                                                    font-size: 14px !important;
                                                    line-height: 20px !important
                                                }
                                                .sub-story table,
                                                .sub-story td {
                                                    text-align: center
                                                }
                                                .sub-story__hero img {
                                                    width: 100px !important;
                                                    margin: 0 auto
                                                }
                                            }
                                            
                                            @media only screen and (max-width: 400px) {
                                                .footer td {
                                                    font-size: 12px !important;
                                                    line-height: 16px !important
                                                }
                                            }
                                            
                                            @media screen and (max-width:600px) {
                                                table[class="columns"] {
                                                    margin: 0 auto !important;
                                                    float: none !important;
                                                    padding: 10px 0 !important;
                                                }
                                                td[class="left"] {
                                                    padding: 0px 0 !important;
                                                }
                                            }
                                        </style>
                                    </head>
                                    
                                    <body style="background: #e1e1e1; font-family:Arial, Helvetica, sans-serif; font-size:1em;">
                                        <style type="text/css">
                                            div.preheader {
                                                display: none !important;
                                            }
                                        </style>
                                        <div class="preheader" style="font-size: 1px; display: none !important;"></div>
                                        <table id="backgroundTable" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#e1e1e1;">
                                            <tr>
                                                <td class="body" align="center" valign="top" style="background:#e1e1e1;" width="100%">
                                                    <table cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td width="640">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="main" width="640" align="center" style="padding: 0 10px;">
                                                                <table style="min-width: 100%; " class="stylingblock-content-wrapper" width="100%" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td class="stylingblock-content-wrapper camarker-inner">
                                                                            <table cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td width="640" align="left">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                <td class="header header--left" style="padding: 20px 10px;" align="left">
                                                                                                    <center>
                                                                                                        <h1 style="margin: 0 0 0 0 ; color:#1e423f">THE GREEN LIST</h1>
                                                                                                        <h2 style="margin: 0 0 0 0 ; color:#222e17">All your garden needs!</h2>
                                                                                                    </center>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                                <table style="min-width: 100%; " class="stylingblock-content-wrapper" width="100%" cellspacing="0" cellpadding="0">
                                                                    <tr>
                                                                        <td class="stylingblock-content-wrapper camarker-inner">
                                                                            <table class="featured-story featured-story--top" cellspacing="0" cellpadding="0">
                                                                                <tr>
                                                                                    <td style="padding-bottom: 20px;">
                                                                                        <table cellspacing="0" cellpadding="0">
                                                                                            <tr>
                                                                                                <td class="featured-story__inner" style="background: #fff;">
                                                                                                    <table cellspacing="0" cellpadding="0">
                                                                                                        <tr>
                                                                                                            <td class="scalable-image" width="640" align="center">
                                                                                                                <a href="https://click.e.mozilla.org/?qs=4efe345e8852f56cc4b90d80dd14edaf4b2bc7479b6c1e0245240707f038f3dc34792ba93278bce615dcd5733330e53ae95f672299c8f77b"><img src="https://image.e.mozilla.org/lib/fe9915707361037e75/m/4/afb835a0-c1f1-4c87-b762-8ec6700acba1.jpg" alt="" style="display: block; border: 0; max-width: 100%; height: auto;"
                                                                                                                        width="640"></a>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                        <tr>
                                                                                                            <td class="featured-story__content-inner" style="padding: 32px 30px 45px;">
                                                                                                                <table cellspacing="0" cellpadding="0">
                                                                                                                    <tr>
                                                                                                                        <td class="featured-story__heading featured-story--top__heading" style="background: #fff;" width="640" align="left">
                                                                                                                            <table cellspacing="0" cellpadding="0">
                                                                                                                                <tr>
                                                                                                                                    <td style="font-family: Geneva, Tahoma, Verdana, sans-serif; font-size: 22px; color: #464646;" width="400" align="left">
                                                                                                                                        <a href="http://localhost:3000/" style="text-decoration: none; color: #464646;">Forgot password</a>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td class="featured-story__copy" style="background: #fff;" width="640" align="center">
                                                                                                                            <table cellspacing="0" cellpadding="0">
                                                                                                                                <tr>
                                                                                                                                    <td style="font-family: Geneva, Tahoma, Verdana, sans-serif; font-size: 16px; line-height: 22px; color: #555555; padding-top: 16px;" align="left">
                                                                                                                                        El siguiente correo se ha generado automaticamente desde el sitio web <a href="http://localhost:3000/" style="text-decoration: none;">The Green List</a>                                                                                                    con el fin de ayudarlo en su proceso de restablecimiento de contrase??a. A continuaci??n ba a encontrar un boton que lo va a direccionar a la pagina donde
                                                                                                                                        podr?? ingresar una nueva contrase??a.<br><br> Si presenta problemas para abrir el enlace del boton, copie el siguiente elnace en el navegador:<br><br>
                                                                                                                                        <a href="http://localhost:3000/recover-password/${token}" style="text-decoration: none;">http://localhost:3000/recover-password/${token}</a>
                                                                                                                                    </td>
                                                                                                                                </tr>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td class="button" style="font-family: Geneva, Tahoma, Verdana, sans-serif; font-size: 16px; padding-top: 26px;" width="640" align="left">
                                                                                                                            <a href="http://localhost:3000/recover-password/${token}" style="background: #0c99d5; color: #fff; text-decoration: none; border: 14px solid #0c99d5; border-left-width: 50px; border-right-width: 50px; text-transform: uppercase; display: inline-block;">Recover Password</a>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </table>
                                                                                                            </td>
                                                                                                        </tr>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    
                                        <!-- Exact Target tracking code -->
                                    
                                    
                                        </custom>
                                    </body>
                                    
                                    </html>`
                                });
                            } catch (err) {
                                console.log(err);
                                console.log(err);
                                res.send({
                                    message: `[ERROR NODEMAILER]: ${err}`
                                }).status(500);
                            }
                            console.log({
                                auth: true,
                                token
                            });
                            res.status(200).send({
                                message: `Verify your email`
                            });
                        } else {
                            console.log(err);
                            res.send({
                                message: `[ERROR]: ${err}`
                            }).status(500);
                        }
                    });
                } else {
                    console.log('Incorrect email');
                    res.send({
                        message: 'Incorrect email'
                    }).status(400);
                }
            } else {
                console.log(err);
                res.send({
                    message: `[ERROR]: ${err}`
                }).status(500);
            }
        });
    } else {
        res.send({
            message: 'Debe ingresar un email'
        }).status(400);
    }
});

module.exports = router;