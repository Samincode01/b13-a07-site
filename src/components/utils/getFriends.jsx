
const getFriends = async() => {
    const res = await fetch('/api/friends')
    const data = await res.json()
    return data;
};

export default getFriends;