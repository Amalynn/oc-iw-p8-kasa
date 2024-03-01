import { useParams } from 'react-router-dom';
import apartments from '../datas/apartments.json';
import Profile from '../components/Profile.jsx';
import Collapse from '../components/Collapse.jsx';

export default function ApartmentDetails() {
    let { id } = useParams();

    let apartmentToDisplay = apartments.find(
        (apartment) => apartment.id === id,
    );

    return (
        <>
            <div className="apartment-description">
                <Collapse title="Description">
                    <p>{apartmentToDisplay.description}</p>
                </Collapse>
                <Collapse title="Equipements">
                    <p>{apartmentToDisplay.equipements}</p>
                </Collapse>
            </div>
        </>
    );
}
