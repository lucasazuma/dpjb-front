import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import '../standard.css'
import api from '../../api'
import {useAuth} from '../../context/auth-context'
const QRcode = () => {
   const {user} = useAuth();
   console.log("user", user)
   return (
        <>
            <div className='standard-container'>
                <div className='standard-form-container'>
                    <h1>Visualizar Jornalista</h1>
                    {user && <QRCode value={user.name} />}
                </div>

            </div>
        </>
    );
};

export default QRcode;