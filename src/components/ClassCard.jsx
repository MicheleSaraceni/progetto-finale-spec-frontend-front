import { Link } from 'react-router-dom';
import '../css/ClassCard.css'
import FavoriteHeart from './FavoriteHeart';

export default function ClassCard({ classData }) {

    return (
        <Link to={`/dettaglioClasse/${classData.id}`} className="classcard-link">
            <div className="card classcard">
                <img
                    src={classData.img}
                    className="card-img-top classcard-img"
                    alt={classData.title}
                />
                <div className="card-body classcard-body">
                    <h5 className="card-title classcard-title">{classData.title}</h5>
                    <p className="card-text classcard-category">{classData.category}</p>
                </div>
                <FavoriteHeart id={classData.id} />
            </div>
        </Link>
    )
}