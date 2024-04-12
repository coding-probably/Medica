import Patientcard from '../components/Patientcard/Patientcard';
import './Home.css'

const Home = () => {

    const patient = [{
        patientName: 'Ashish Kumar',
        patientDepartment: 'ENT',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'Rohit',
        patientDepartment: 'llor sit amet consectetur adipisi',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'James',
        patientDepartment: 'em ipsum dolor sit amet consectetur adipisicing ',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'Thomas',
        patientDepartment: 'amet consectetur adipisicing elit',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'James',
        patientDepartment: 'orem ipsum dolor sit ',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'Max',
        patientDepartment: 'um dolor sit amet consectetur adipi',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },
    {
        patientName: 'Alex',
        patientDepartment: 'dolor sit amet consectetur ad',
        patientDiscripyion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, voluptates illo! Ab harum expedita ratione reiciendis! Sint iusto autem cupiditate reprehenderit nihil officiis esse id possimus, aut deserunt incidunt voluptatem.'
    },


    ]


    return (
        <>
        <div className="container-main home-main">
            <div className="content-area-home">
                <h1>Patient details</h1>
            </div>
            <div className="patient-grid">

                {patient.map((patient, index) => (
                    <Patientcard key={index} patientdes={patient}></Patientcard>
                ))}


            </div>
        </div>
        
        </>
    )
}

export default Home;