import { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import DetailComponent from '../components/DetailComponent.jsx';
import '../css/ClassComparison.css';

export default function ClassComparison() {
    const { classes } = useContext(GlobalContext);
    const [firstId, setFirstId] = useState('');
    const [secondId, setSecondId] = useState('');

    return (
        <div className="container comparison-container">
            <div className="row comparison-controls g-3 mb-4">
                <div className="col-12 col-lg-6">
                    <select
                        className="form-select comparison-select"
                        value={firstId}
                        onChange={e => setFirstId(e.target.value)}
                    >
                        <option value="">Seleziona prima classe</option>
                        {classes.map(c => (
                            <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                    </select>
                </div>
                <div className="col-12 col-lg-6">
                    <select
                        className="form-select comparison-select"
                        value={secondId}
                        onChange={e => setSecondId(e.target.value)}
                    >
                        <option value="">Seleziona seconda classe</option>
                        {classes.map(c => (
                            <option key={c.id} value={c.id}>{c.title}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row comparison-content g-4">
                <div className="mt-0 col-12 col-lg-6">
                    {firstId
                        ? <DetailComponent className="comparison-panel" id={firstId} />
                        : <p className="placeholder-text">Seleziona la prima classe</p>}
                </div>
                <div className="mt-0 col-12 col-lg-6">
                    {secondId
                        ? <DetailComponent className="comparison-panel" id={secondId} />
                        : <p className="placeholder-text">Seleziona la seconda classe</p>}
                </div>
            </div>
        </div>
    );
}
