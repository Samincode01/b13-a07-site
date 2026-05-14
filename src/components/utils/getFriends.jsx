
const getFriends = async() => {
    // https://6a0606e4c83ba8ad9b3d2608.mockapi.io/friends
    const res = await fetch("http://localhost:3000/friends.json");
    const data = await res.json();

    return data;
};

export default getFriends;