import { Router } from "express"
import UserManager from "../../controllers/users.controller.js"
import {changePremium, addFile, resetPass,deleteFile} from "../../controllers/users.controller.js"
import upload from '../../configs/multer.config.js';

const manager = new UserManager()

const router = Router()

//?[POST] 🌐/api/users/restPass
router.post('/restPass', resetPass)

//?[POST] 🌐/api/users/:uid/documents
router.post('/:uid/documents',upload.array('files'),addFile)

//![DELETE] 🌐/api/users/{{userId}}/documents/${documentId}
router.delete('/:uid/documents/:did',deleteFile)

//![DELETE] 🌐/api/users/premium/:uid
router.put('/premium/:uid',changePremium)



export default router
