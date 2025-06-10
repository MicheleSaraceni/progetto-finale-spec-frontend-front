import React, { useState, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import DetailComponent from '../components/DetailComponent.jsx'
import '../css/ClassComparison.css'

export default function ClassComparison() {
    const { classes } = useContext(GlobalContext);
    const [firstId, setFirstId] = useState('');
    const [secondId, setSecondId] = useState('');

    return (
        <div className="comparison-container">
            <div className="comparison-controls d-flex justify-content-center align-items-center">
                <select
                    className="form-select comparison-select me-3"
                    value={firstId}
                    onChange={e => setFirstId(e.target.value)}
                >
                    <option value="">Seleziona prima classe</option>
                    {classes.map(c => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                </select>

                <select
                    className="form-select comparison-select ms-3"
                    value={secondId}
                    onChange={e => setSecondId(e.target.value)}
                >
                    <option value="">Seleziona seconda classe</option>
                    {classes.map(c => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                </select>
            </div>

            <div className="comparison-content">
                <div className="comparison-panel">
                    {firstId
                        ? <DetailComponent id={firstId} />
                        : <p className="placeholder-text">Seleziona una classe</p>}
                </div>
                <div className="comparison-panel">
                    {secondId
                        ? <DetailComponent id={secondId} />
                        : <p className="placeholder-text">Seleziona una classe</p>}
                </div>
            </div>
        </div>
    );
}
