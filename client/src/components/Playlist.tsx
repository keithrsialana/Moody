
/**
 * Description
 * Playlist component that stores all the user selected songs and displays them
 * @returns {any}
 */
const Playlist:React.FC = () => {
    // TODO: Add code to add songs into the playlist
    // the return will be using the .map() function
	return (
        // Maybe add sorting methods later on? idk
        <table className="table">
            <caption>Your playlist</caption>
            <thead>
                <tr>
                    <th className="col">Song Length</th>
                    <th className="col">Name</th>
                    <th className="col">Artist</th>
                    <th className="col">Album</th>
                </tr>
            </thead>
            <tbody>
                {/* Code for populating playlist here */}
            </tbody>
        </table>
    );
};

export default Playlist;
