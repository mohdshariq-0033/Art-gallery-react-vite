import React from 'react'
import { Link } from 'react-router-dom'
import {ImgData} from '/src/imgComponent/TechImgData'

export default function tech() {
  return (
      <>
 
  <div className="container text-center">
    <div className="row mb-4 mt-5">
         {ImgData.map((image, index) => (
  <div
    key={index}
    className="img-fluid col-6 col-sm-6 col-md-4 col-lg-3 my-2"
  >
    <div className="imgContainer">
      <img src={image.src} className="img-thumbnail" alt="car" />
      <div className="imgBtn">
        <Link
          to={image.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download
        </Link>
      </div>
    </div>
  </div>
))}
    </div>
  </div>

</>
  )
}
