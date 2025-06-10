import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";
import '../css/ClassDetail.css';
import FavoriteHeart from './FavoriteHeart';

export default function DetailComponent({ id }) {
    const { classes } = useContext(GlobalContext);
    const classID = Number(id);
    const specificClass = classes.find(c => c.id === classID);

    if (!specificClass) {
        return (
            <div className="class-detail-container">
                <p className="detail-loading">Caricamento in corso…</p>
            </div>
        );
    }

    return (
        <div className="class-detail-container">
            <div className="detail-header d-flex align-items-center">
                <img
                    src={specificClass.img}
                    alt={specificClass.title}
                    className="detail-img me-4"
                />
                <div>
                    <h1 className="detail-title">{specificClass.title}</h1>
                    <h4 className="detail-category">{specificClass.category}</h4>
                </div>
            </div>

            <p className="detail-description">{specificClass.description}</p>

            <div className="detail-stats row">
                <div className="col-md-4 stat-card">
                    <h5>Dado Vita</h5>
                    <span className="stat-value">d{specificClass.lifeDice}</span>
                </div>
                <div className="col-md-4 stat-card">
                    <h5>Caratteristica Principale</h5>
                    <ul>
                        {specificClass.mainFeature.map((feat, i) => (
                            <li key={i}>{feat}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4 stat-card">
                    <h5>Tiri Salvezza</h5>
                    <ul>
                        {specificClass.ts.map((ts, i) => (
                            <li key={i}>{ts}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="detail-proficiency mt-4">
                <h5>Comprtenze</h5>
                <ul className="proficiency-list">
                    {specificClass.proficiency.map((prof, i) => (
                        <li key={i}>{prof}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-meta mt-4 d-flex justify-content-between">
                <span>Creato: {new Date(specificClass.createdAt).toLocaleDateString()}</span>
                <span>Aggiornato: {new Date(specificClass.updatedAt).toLocaleDateString()}</span>
            </div>
            <FavoriteHeart id={specificClass.id} />
        </div>
    );
}
