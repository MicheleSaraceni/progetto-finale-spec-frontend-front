import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import "../css/FavoriteHeart.css"

export default function FavoriteHeart({ id }) {
    const { liked, setLiked } = useContext(GlobalContext);

    const isLiked = liked.includes(id);

    const toggleLike = (e) => {
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
            className={`favorite-heart ${isLiked ? 'liked' : ''}`}
            onClick={toggleLike}
        >
            <div className="heart-shape"></div>
        </div>
    );
};