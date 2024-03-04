import PropTypes from 'prop-types';

function Profile({ host }) {
    let hostName = host.name.split(' ');
    let hostFirstName = hostName[0];
    let hostLastName = hostName[1];

    return (
        <div className="profile">
            <div className="profile-host-name">
                <p>{hostFirstName}</p>
                <p>{hostLastName}</p>
            </div>
            <div className="profile-avatar">
                <img src={host.picture} alt={`Avatar de ${host.name}`} />
            </div>
        </div>
    );
}

export default Profile;

Profile.propTypes = {
    host: PropTypes.object.isRequired,
};
