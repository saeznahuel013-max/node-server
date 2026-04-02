const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware para entender datos de FIFA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Endpoint de Autenticación (Login)
// El juego suele buscar esta ruta para validar al usuario
app.post('/ut/game/fifa14/auth', (req, res) => {
    console.log("Intentando iniciar sesión...");
    
    // Respondemos con un Token de sesión falso (esto engaña al juego)
    res.json({
        "protocol": "https",
        "ip": "tu-proyecto.up.railway.app", 
        "serverTime": new Date().toISOString(),
        "lastLogin": new Date().toISOString(),
        "sessionToken": "Nahu-Token-2026-XYZ", // Token inventado
        "sku": "FUT14AND"
    });
});

// 2. Información del Usuario (Monedas y Nivel)
app.get('/ut/game/fifa14/user/accountinfo', (req, res) => {
    res.json({
        "personaName": "Nahuel_Owner",
        "coins": 999999,
        "fcPoints": 5000,
        "level": 50,
        "xp": 100000
    });
});

// 3. Estado de los servidores (Para que el círculo no gire infinito)
app.get('/ut/game/fifa14/status', (req, res) => {
    res.json({
        "status": "UP",
        "isMaintenance": false
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de Login FIFA 14 corriendo en puerto ${PORT}`);
});

