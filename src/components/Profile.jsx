

const Profile = () => {

    const subdomain = window.location.host.split('.')[0];

    return (
        <h1> Welcome { subdomain } </h1>
    )

}

export default Profile;