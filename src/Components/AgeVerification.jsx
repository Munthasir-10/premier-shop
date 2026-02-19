import React, { useState } from 'react'
import './AgeVerification.css'

function AgeVerification() {
  const [verified, setVerified] = useState(
    localStorage.getItem('ageVerified') === 'true'
  )

  function handleYes() {
    localStorage.setItem('ageVerified', 'true')
    setVerified(true)
  }

  function handleNo() {
    window.location.href = 'https://www.google.com'
  }

  if (verified) return null

  return (
    <div className="age-overlay">
      <div className="age-box">
        <h1>Premier</h1>
        <p className="age-subtitle">Off Licence</p>
        <div className="age-divider" />
        <h2>Are you 18 or over?</h2>
        <p>You must be 18 or older to enter this site. By entering you confirm you are of legal drinking age in the UK.</p>
        <div className="age-buttons">
          <button className="age-yes" onClick={handleYes}>Yes, I am 18+</button>
          <button className="age-no" onClick={handleNo}>No, I am under 18</button>
        </div>
        <p className="age-disclaimer">This site sells alcohol. Please drink responsibly.</p>
      </div>
    </div>
  )
}

export default AgeVerification