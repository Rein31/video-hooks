import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSeacrhTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSeacrhTerm);
    }, [defaultSeacrhTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });
    
    setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;