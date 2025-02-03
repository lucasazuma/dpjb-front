import React from 'react';
import QRCode from 'qrcode.react';
import '../standard.css'
const QRcode = () => {
    return (
        <div className='standard-container'>
            <div className='standard-form-container'>   
                <h1>QR Code Generator</h1>
                <QRCode value="Jornaliasta Lucas Azuma https://www.google.com.br/?hl=pt-BR" />
            </div>

        </div>
    );
};

export default QRcode;