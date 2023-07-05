const multer = require('multer');
const upload = multer()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      let uploadDirectory = '';
      if (file.fieldname === 'images') {
        uploadDirectory = path.join(__dirname, 'uploads/');
      }
      callback(null, uploadDirectory);
    },
    filename: (req, file, callback) => {
      const matchForImages = ['image/png', 'image/jpeg', 'image/jpg'];
      if (file.fieldname === 'images' && matchForImages.indexOf(file.mimetype) === -1) {
        const message = `${file.originalname} is invalid. Only accept png/jpeg.`;
        return callback(message, null);
      }
      const filename = `${Date.now()}-${file.originalname}`;
      callback(null, filename);
    },
});

var uploadFiles = multer({ storage: storage });
module.exports = uploadFiles;