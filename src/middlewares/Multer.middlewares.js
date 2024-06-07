import multer from "multer";

// it will work like a middlewarw chichs chack all deta and store all url


const storag = multer.diskStorage({
    destination: function (req, file, cd) {
        cd(null, "./public/temp")
    },
    filename: function (req, file, cd){
        cd(null, file.originalname)
    }
})

export const multer = ({storag})