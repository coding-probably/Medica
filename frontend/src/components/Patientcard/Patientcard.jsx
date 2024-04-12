import './Patientcard.css'

const Patientcard = ({ patientdes }) => {

    return (
        <>
        <div className="card">
            <div className="visual-area">
                <div className="patient-image"></div>
                
            </div>
            <div className="patient-desc">
                <h3 className="item-name">{patientdes.patientName}</h3>
                <h5 className="item-location">{patientdes.patientDepartment}</h5>
                <p>{patientdes.patientDiscripyion}</p>
                
                
            </div>
        </div>
        </>
    )
}

export default Patientcard;