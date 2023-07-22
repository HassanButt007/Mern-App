const express = require("express")
//=====Import modals
const Client = require("../db/model/clientModel.js")
//========router
const Router = express.Router();
const nodemailer = require('nodemailer');
const uploadFiles = require('../upload.js');
const fs = require("fs");

const transporter = nodemailer.createTransport({
  host: '',
  port: '',
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
  connectionTimeout: 5000,
  secure: true,
});


Router.post('/new', uploadFiles.array('image', 5), async (req, res) => {
  try {
    const { name, email, phone, address, additionalInfo, selectedOption, selectedOption2 } = req.body;

    const fileNames = [];
    if (req.files && req.files.length > 0) {
      await Promise.all(
        req.files.map(async (file) => {
          const newFilename = `${Date.now()}-${file.originalname}`;
          fileNames.push(newFilename);
        })
      );
    }

    console.log("filesNames", fileNames)

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

    const mailOptions = {
      from: '',
      to: [email, '', '' ],
      subject: 'Report an Issue',
      text: `Problem in: ${selectedOption}\nIssue in: ${selectedOption2}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nAdditional Info: ${additionalInfo}`,
      attachments: [],
    };

    await Promise.all(
      req.files.map(async (file) => {
        const newFilename = `${Date.now()}-${file.originalname}`;
        fileNames.push(newFilename);

        mailOptions.attachments.push({
          filename: newFilename,
          path: file.path
        });
      })
    );


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while sending email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(201).json({ message: 'Form data saved and email sent successfully' });
      }
    });


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});


module.exports = Router;
