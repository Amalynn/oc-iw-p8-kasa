import { useParams } from 'react-router-dom';
import apartments from '../datas/apartments.json';
import Profile from '../components/Profile.jsx';
import Collapse from '../components/Collapse.jsx';
import ElementsList from '../components/ElementsList.jsx';
import Rating from '../components/Rating.jsx';
import Slideshow from '../components/Slideshow.jsx';

export default function ApartmentDetails() {
    let { id } = useParams();

    let apartmentToDisplay = apartments.find(
        (apartment) => apartment.id === id,
    );

    return (
        <>
            <Slideshow
                pictures={apartmentToDisplay.pictures}
                title={apartmentToDisplay.title}
            />
            <section className="apartment">
                <div className="apartment-header">
                    <div className="group-location">
                        <h1>{apartmentToDisplay.title}</h1>
                        <h2>{apartmentToDisplay.location}</h2>
                        <div className="tags">
                            <ElementsList
                                list={apartmentToDisplay.tags}
                                typeList="row"
                            />
                        </div>
                    </div>
                    <div className="group-profile">
                        <Rating rating={apartmentToDisplay.rating} />
                        <Profile host={apartmentToDisplay.host} />
                    </div>
                </div>

                <div className="apartment-description">
                    <Collapse title="Description">
                        {apartmentToDisplay.description}
                    </Collapse>

                    <Collapse title="Equipements">
                        <ElementsList
                            list={apartmentToDisplay.equipments}
                            typeList="column"
                        />
                    </Collapse>
                </div>
            </section>
        </>
    );
}
