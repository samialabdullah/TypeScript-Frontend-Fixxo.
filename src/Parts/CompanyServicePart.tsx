import React from 'react'

export interface Prop {

  companyicon:  string | undefined

  servicetitle: string

  serviceinfo: string

}



const CompanyServicePart: React.FC <Prop>  = ({companyicon, servicetitle, serviceinfo}) => {
  return (
    <div className="service-info">
      <button className="icon-button"> <img src={companyicon} alt={servicetitle}/></button>
      <h1>{servicetitle}</h1>
      <p>{serviceinfo}</p>
    </div>
  )
}

export default CompanyServicePart