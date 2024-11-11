
/**
 * Description
 * Playlist component that stores all the user selected songs and displays them
 * @returns {any}
 */



type Playlist = {
    song_name: string;
    artist: string
}



const Playlist: React.FC = () => {
    // TODO: Add code to add songs into the playlist
    // the return will be using the .map(return the element that is being repeated.) function
    const playlistJSONFromLocalStorage = localStorage.getItem("playlist");
    let playlist = [];
    if (playlistJSONFromLocalStorage) {
        const playlistJSON = JSON.parse(playlistJSONFromLocalStorage);

        playlist = playlistJSON.song_list // array of songs
    }

    return (
        // Maybe add sorting methods later on? idk
        <table className="table">
            <caption>Your playlist</caption>
            <thead>
                <tr>
                    <th className="col">Name</th>
                    <th className="col">Artist</th>
                    <th className="col">Album</th>
                    <th className="col">Song Length</th>
                </tr>
            </thead>
            <tbody>
                {playlist.map((item: Playlist) => (
                    <tr>
                        <td>{item.song_name}</td>
                        <td>{item.artist}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Playlist;
