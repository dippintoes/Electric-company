import multer from "multer";
export const upload = multer({
  storage: multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}--${file.originalname}`);
    },
  }),
  //   limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
});
