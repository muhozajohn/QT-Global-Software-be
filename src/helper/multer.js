import multer from "multer";
import path from "path";

const fileUpload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname).toLowerCase();
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".jpeg" &&
            ext !== ".gif" &&
            ext !== ".tif" &&
            ext !== ".webp" &&
            ext !== ".bmp" &&
            ext !== ".tiff" &&
            ext !== ".svg" &&
            ext !== ".heic" &&
            ext !== ".doc" &&
            ext !== ".docx" &&
            ext !== ".xls" &&
            ext !== ".xlsx" &&
            ext !== ".ppt" &&
            ext !== ".pptx" &&
            ext !== ".pdf"
        ) {
            return cb(new Error("Invalid file type"), false);
        }
        cb(null, true);
    },
});

export default fileUpload;
