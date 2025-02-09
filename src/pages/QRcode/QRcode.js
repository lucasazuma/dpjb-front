import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import '../standard.css'
import api from '../../api'
const QRcode = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDataReady, setIsDataReady] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsDataReady(false);
                const response = await api.get('/query/ReadAsset/journalist1');
                setIsDataReady(true);
                setData(JSON.parse(response.data.data));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>{isDataReady &&
            <div className='standard-container'>
                <div className='standard-form-container'>
                    <h1>QR Code Generator</h1>
                    <QRCode value={data.username} />
                </div>

            </div>
        }
        </>
    );
};

export default QRcode;