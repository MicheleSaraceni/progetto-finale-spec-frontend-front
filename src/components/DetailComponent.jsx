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
            <FavoriteHeart id={specificClass.id} />
            <div className="detail-header d-flex flex-column flex-lg-row align-items-center">
                <img
                    src={specificClass.img}
                    alt={specificClass.title}
                    className="detail-img mb-3 mb-lg-0 me-lg-4"
                />
                <div className="text-center text-lg-start">
                    <h1 className="detail-title">{specificClass.title}</h1>
                    <h4 className="detail-category">{specificClass.category}</h4>
                </div>
            </div>

            <p className="detail-description">{specificClass.description}</p>

            <div className="detail-stats row row-cols-1 row-cols-lg-3 g-3">
                <div className="col stat-card">
                    <h5>Dado Vita</h5>
                    <span className="stat-value">d{specificClass.lifeDice}</span>
                </div>
                <div className="col stat-card">
                    <h5>Caratteristica Principale</h5>
                    <ul className="list-unstyled mb-0">
                        {specificClass.mainFeature.map((feat, i) => (
                            <li key={i}>{feat}</li>
                        ))}
                    </ul>
                </div>
                <div className="col stat-card">
                    <h5>Tiri Salvezza</h5>
                    <ul className="list-unstyled mb-0">
                        {specificClass.ts.map((ts, i) => (
                            <li key={i}>{ts}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="detail-proficiency mt-4">
                <h5>Competenze</h5>
                <ul className="proficiency-list">
                    {specificClass.proficiency.map((prof, i) => (
                        <li key={i}>{prof}</li>
                    ))}
                </ul>
            </div>

            <div className="detail-meta d-flex flex-column flex-lg-row justify-content-between align-items-center mt-4">
                <span>Creato: {new Date(specificClass.createdAt).toLocaleDateString()}</span>
                <span>Aggiornato: {new Date(specificClass.updatedAt).toLocaleDateString()}</span>
            </div>
        </div>
    );
}
