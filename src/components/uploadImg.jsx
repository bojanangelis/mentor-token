import { useRef, useState } from 'react'
import './UploadImgStyle.scss'

const UploadImage = () => {
  const [uploadImage, setUploudImage] = useState(null)
  const [isNotImg, setIsNotImg] = useState(false)

  const hiddenFileInput = useRef(null)
  // ref e pokazuvac kako prst pokazuvame na input type file linija
  // <input id='fileInput' className='hidden' ref={hiddenFileInput} type='file' />
  // ova e isto kako vo javascript ---->>> document.getElementsByName('fileInput').current.click();

  const handleOpenFile = () => {
    // in javascript
    // document.getElementsByName('fileInput').current.click();

    // so ova vikame ako slucjano uploud img ima nekoj si state nema da se otvori pak folderot da se odberi slika se dodeka ne se izbrshie
    if (uploadImage !== null) return

    // da me prodolzi nadolu
    hiddenFileInput.current.click()
  }

  const handleInputFile = (e) => {
    const value = e?.target?.files?.[0]
    console.log('the type is allowed? ', value?.type)
    if (value?.type.includes('image')) {
      setUploudImage(URL.createObjectURL(value))
    } else {
      setIsNotImg(true)
    }
  }

  // vaka pajga mora da ima ????? prashalnicinja na hiddenFileInput?.current?.value
  // console.log(hiddenFileInput?.current?.value)

  // console.log('this is the img-->', uploadImage)

  const handleRevokeURL = () => {
    // uploadImage nie sega go imame zacuvano filov no sakame da go izbrishime
    URL.revokeObjectURL(uploadImage)
    setUploudImage(null)
  }

  return (
    <div className='fileInputComponent'>
      <input
        onChange={handleInputFile}
        id='fileInput'
        className='hidden'
        ref={hiddenFileInput}
        type='file'
      />
      <div className='upload__picture'>
        <div onClick={() => handleOpenFile()} className='icon--upload'>
          <img
            className='img--uploaded'
            width={80}
            height={80}
            src={`${uploadImage ? uploadImage : 'src/assets/business-img.svg'}`}
          />
          <img
            onClick={handleRevokeURL}
            className='camera-icon'
            width={15}
            height={15}
            src={uploadImage ? 'src/assets/x-icon.svg' : 'src/assets/camera-icon.svg'}
          />
        </div>
      </div>
      {isNotImg && <p>This file is not an image. Please select files like: JPG, PNG, SVG...</p>}
    </div>
  )
}

export default UploadImage
