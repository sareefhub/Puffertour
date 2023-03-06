import React from 'react'

import "./Informationtour.css"

interface InformationProps {
  children: React.ReactNode;
}

const Information: React.FC<InformationProps> = (props) => {
  return (
    <div className='background'>
      {props.children}
    </div>
  )
};

export default Information;