import multer from "multer"

const storage = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + file.originalname)
    }
})

export const upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/jpeg' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/gif'

        ) {
            cb(null, true)
        }
        else {
            cb(null, false);
            cb(new Error('Only jpeg,  jpg , png, and gif Image allow'))
        }
    }
})