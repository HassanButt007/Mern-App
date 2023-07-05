const express = require("express")
//=====Import modals
const Client = require("../db/model/clientModel.js")
//========router
const Router = express.Router();
const nodemailer = require('nodemailer');
const uploadFiles = require('../upload.js');
const fs = require("fs");
const { statSync } = fs;
const path = require("path");
const sharp = require("sharp");
const { v4: uuidv4 } = require('uuid');
const { Readable } = require('stream');

const multer = require('multer');
const upload = multer()

// const uploadFiles = multer({ storage });

const transporter = nodemailer.createTransport({
    host: '',
    port: 456,
    secure: false,
    auth: {
        user: '',
        pass: '',
    },
    connectionTimeout: 5000,
    secure: true,
});


Router.post('/new', upload.array('image'), async (req, res) => {
    try {
        const { name, email, phone, address, additionalInfo, selectedOption, selectedOption2 } = req.body;
        const fileNames = [];
        if (req.image && req.image.length > 0) {
            await Promise.all(
                req.image.map(async (item) => {
                    const newFilename = `${Date.now()}-${item}`;
                    fileNames.push(newFilename);
                })
            );
        }

        console.log("first", fileNames)
        console.log("req", req.body.image)

        const clientData = await Client.create({
            name,
            email,
            phone,
            address,
            additionalInfo,
            images: fileNames,
            selectedOption,
            selectedOption2,
        });
        await clientData.save();

        //NODEMAILER
        const mailOptions = {
            from: 'info@propelcrm.co.uk',
            to: [email, 'info@propelcrm.co.uk'],
            subject: 'Maintance Reporting',
            text: `Issue in: ${selectedOption}\nwith: ${selectedOption2}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nAdditional Info: ${additionalInfo}`,
            attachments: [],
        };

        await Promise.all(
            fileNames.map(async (fileName) => {
                const imageFilePath = path.join(__dirname, 'uploads', fileName);

                // Read the image file using file stream
                const imageStream = fs.createReadStream(imageFilePath);

                // console.log("first", imageFilePath)

                // Convert the image stream to a base64-encoded string
                let imageBase64 = '';
                imageStream.on('data', (chunk) => {
                    imageBase64 += chunk.toString('base64');
                });

                // Wait for the image stream to end
                await new Promise((resolve, reject) => {
                    imageStream.on('end', resolve);
                    imageStream.on('error', reject);
                });

                mailOptions.attachments.push({
                    filename: `${uuidv4()}.jpg`,
                    content: imageBase64,
                    encoding: 'base64',
                });
            })
        );


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                res.status(500).json({ message: 'An error occurred while sending email' });
            } else {
                console.log('Email sent:', info.response);

                res.status(201).json({
                    message: 'Form data saved and email sent successfully',
                    files: fileNames,
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = Router;
