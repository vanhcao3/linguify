function Profile({ params }: { params: { nickname: string } }) {
    return <div>this is profile of {params.nickname}</div>;
}

Profile.layout = null;

export default Profile;
