import { useContext, useEffect, useState } from "react";
import UserContext from "../context/LoginContext";
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
    const [playlist, setPlaylist] = useState([]);

    function updatePlaylist(list:any){
        setPlaylist(list); // array of songs
    }
    const context:any = useContext(UserContext);

    useEffect(() =>{
        const {loginToken} = context;
        const loginUser = loginToken.username;
        // Add code to add songs into the playlist

        const lsPlaylist = localStorage.getItem(`${loginToken.username}_playlist`);
        if (lsPlaylist) {
            const playlistObj = JSON.parse(lsPlaylist);
            if (loginUser == playlistObj.username)
                updatePlaylist(playlistObj.playlist.song_list);
        }
    },[]);

    return (
        // Maybe add sorting methods later on? idk
        <table className="table table-striped">
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
                {playlist.map((item: any) => (
                    <tr>
                        <td>{item.songName}</td>
                        <td>{item.artist}</td>
                        <td>N/A</td>
                        <td>N/A</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Playlist;
