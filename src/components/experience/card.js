import React from 'react'
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Card = ({ icon, year, title, location, desc }) => {
  const icons = {
    graduation: <FaGraduationCap className="timeline_icon" />,
    briefcase: <FaBriefcase className="timeline_icon" />,
  }

  return (
    <div className="timeline_item">
      {icons[icon]}
      <span className="timeline_date">{year}</span>
      <h3 className="timeline_title">{title}</h3>
      <h4 className="timeline_location">{location}</h4>
      <p className="timeline_text">{desc}</p>
    </div>
  )
}

export default Card