import React from 'react';

import star from '../osu-beatmaps/star.png'
import AR from '../osu-beatmaps/AR.png'
import CS from '../osu-beatmaps/CS.png'
import BPM from '../osu-beatmaps/BPM.png'
import Length from '../osu-beatmaps/Length.png'
import maxCombo from '../osu-beatmaps/hit300.png'
import HP from '../osu-beatmaps/HP.png'
import OD from '../osu-beatmaps/OD.png'
import beatmapper from '../osu-beatmaps/beatmapper.png'
import playcount from '../osu-beatmaps/playcount.png'
import download from '../osu-beatmaps/download.png'
import osuDirect from '../osu-beatmaps/osu-direct.png'

const BeatmapPreview = ({ beatmap }) => {
    return (
        <div className="beatmap-preview" key={beatmap.id}>
            <div className="image-and-song-attributes" style={{ display: 'flex' }}>
                {/* Código para la imagen y beatmapper */}
                <div className="image-and-beatmapper">
                    <img
                        src={require('../osu-beatmaps/' + beatmap.id + '.jpg')}
                        className="img-fluid beatmap-preview-card2x"
                        alt={beatmap.name}
                    />
                    {/* Código para el Beatmapper */}
                    <div className="info-label beatmapper">
                        <p className="info-label-text beatmap-beatmapper">Beatmapper:</p>
                    </div>
                    <div className="info-label beatmapper-div">
                        <img
                            src={beatmapper}
                            className="img-fluid info-label-icon"
                            alt={beatmap.name}
                        />
                        <div className="beatmapper-name">{beatmap.beatmapper}</div>
                    </div>
                </div>
                {/* Código para los atributos del beatmap */}
                <div className="beatmap-attributes" style={{ minWidth: '540px' }}>
                    {/* Código para los atributos del beatmap */}
                    {/* ... (código para artist, name, difficulty, estrellas, AR, CS, etc.) */}
                    <h1 className="beatmap-artist">{beatmap.artist}</h1>
                    <h2 className="beatmap-name">{beatmap.name}</h2>
                    <h4 className="beatmap-difficulty">{beatmap.difficulty}</h4>

                    <div className="beatmap-difficulty-info">
                        <div className="beatmap-difficulty-info-1">
                            <div className="info-label">
                                <img
                                    src={star}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-stars">Stars: {beatmap.stars}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={AR}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-AR">AR: {beatmap.AR}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={CS}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-CS">CS: {beatmap.CS}</p>
                            </div>
                        </div>



                        <div className="beatmap-difficulty-info-2">
                            <div className="info-label">
                                <img
                                    src={Length}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-Length">Length: {beatmap.Length}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={BPM}
                                    className="img-fluid info-label-icon info-label-icon-bpm"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-BPM">BPM: {beatmap.BPM}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={playcount}
                                    className="img-fluid info-label-icon info-label-icon-playcount"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-playcount">Playcount: {beatmap.playcount}</p>
                            </div>
                        </div>

                        <div className="beatmap-difficulty-info-3">
                            <div className="info-label">
                                <img
                                    src={HP}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.HP}
                                />
                                <p className="info-label-text beatmap-HP">HP: {beatmap.HP}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={OD}
                                    className="img-fluid info-label-icon"
                                    alt={beatmap.OD}
                                />
                                <p className="info-label-text">OD: {beatmap.OD}</p>
                            </div>

                            <div className="info-label">
                                <img
                                    src={maxCombo}
                                    className="img-fluid info-label-icon beatmap-maxcombo-icon"
                                    alt={beatmap.name}
                                />
                                <p className="info-label-text beatmap-maxcombo">Max Combo: {beatmap.maxCombo}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Código para la sección de descargas */}
                <div className="download-section">
                    <div className="beatmap-download-section">
                        {/* Código para las secciones de descargas */}
                        {/* ... (código para ranked, gamemode, osu! Direct, Download) */}
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <p className="download-direct-text" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: '120px',
                                marginTop: '15px',
                                backgroundColor: '#623c3c0d',
                                border: '2px solid rgba(0, 0, 0, 0)',
                                borderRadius: '20px',
                                minWidth: '72px',
                                height: '16px',
                                textAlign: 'center',
                                fontWeight: '600',
                                borderColor: '#ff004c78',
                                userSelect: 'none'
                            }}>ranked</p>
                            <img
                                src={require('../osu-gamemode/' +
                                    beatmap.gameMode +
                                    '.png')}
                                className="img-fluid info-label-icon beatmap-gamemode-icon"
                                alt={beatmap.gameMode}
                                style={{
                                    marginLeft: '3px',
                                    marginTop: '5px'
                                }}
                            />
                        </div>
                        <div className="beatmap-download-direct">
                            <div >
                                <a href="#" className="direct-link" style={{ display: 'flex', justifyContent: 'flex-start', textDecoration: 'none', marginLeft: '126px' }}>
                                    <img
                                        src={osuDirect}
                                        className="img-fluid info-label-icon beatmap-download-direct-icon"
                                        alt={beatmap.name}
                                    />

                                    <h3 className="download-direct-text" style={{
                                        marginLeft: '4px'
                                    }}>osu! Direct</h3>
                                </a>
                            </div>
                        </div>
                        <div className="beatmap-download">
                            <div>
                                <a href="#" className="direct-link" style={{ display: 'flex', justifyContent: 'flex-start', textDecoration: 'none', marginLeft: '127px' }}>
                                    <img
                                        src={download}
                                        className="img-fluid info-label-icon beatmap-download-icon"
                                        alt={beatmap.name}
                                    />
                                    <h3 className="download-text">Download</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeatmapPreview;