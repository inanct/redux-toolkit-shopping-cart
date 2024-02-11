import React from 'react'

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3023.490731046204!2d-74.00457492439138!3d40.72922623656155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQzJzQ1LjIiTiA3NMKwMDAnMDcuMiJX!5e0!3m2!1sen!2sgr!4v1691050244325!5m2!1sen!2sgr"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{display:"block"}}
      title="map"
    ></iframe>
  )
}

export default Map