import { useContext, useRef, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { GlobalContext } from '../contexts/GlobalContext';
import '../css/FavoriteHeart.css';

export default function FavoriteHeart({ id }) {
    const { liked, setLiked } = useContext(GlobalContext);
    const heartRef = useRef(null);

    const isLiked = liked.includes(id);

    //  position: relative del genitore
    useEffect(() => {
        const parent = heartRef.current?.parentNode;
        if (parent) {
            const cs = window.getComputedStyle(parent);
            if (cs.position === 'static') {
                parent.style.position = 'relative';
            }
        }
    }, []);

    const toggleLike = e => {
        e.preventDefault();
        e.stopPropagation();
        setLiked(prev =>
            isLiked
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    return (
        <div
            ref={heartRef}
            className="favorite-heart"
            onClick={toggleLike}
        >
            {isLiked
                ? <FaHeart className="heart-icon liked" />
                : <FaRegHeart className="heart-icon" />
            }
        </div>
    );
}
