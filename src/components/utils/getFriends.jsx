
const getFriends = async() => {
 
    const res = await fetch("https://6a0606e4c83ba8ad9b3d2608.mockapi.io/friends");
    const data = await res.json();

    return data;
};

export default getFriends;