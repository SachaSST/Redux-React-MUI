var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';
var Weather = function () {
    var _a = useState(null), weatherData = _a[0], setWeatherData = _a[1];
    var _b = useState('Paris'), city = _b[0], setCity = _b[1];
    var _c = useState(true), loading = _c[0], setLoading = _c[1];
    var apiKey = '674b2b4b5bdae5978d231f22685c8338';
    var fetchWeatherData = function (city) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, axios.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(apiKey, "&units=metric"))];
                case 2:
                    response = _a.sent();
                    setWeatherData(response.data);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching the weather data', error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        fetchWeatherData(city);
    }, [city]);
    var handleCityChange = function (event) {
        setCity(event.target.value);
    };
    var handleFetchWeather = function () {
        fetchWeatherData(city);
    };
    return (_jsx(Card, { children: _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h5", children: "Weather" }), _jsxs(Box, { display: "flex", alignItems: "center", mt: 2, children: [_jsx(TextField, { label: "City", value: city, onChange: handleCityChange, variant: "outlined", style: { marginRight: '10px' } }), _jsx(Button, { variant: "contained", color: "primary", onClick: handleFetchWeather, children: "Get Weather" })] }), loading ? (_jsx(Typography, { variant: "body1", mt: 2, children: "Loading..." })) : (weatherData && (_jsxs(Box, { mt: 2, children: [_jsx(Typography, { variant: "h6", children: weatherData.name }), _jsxs(Typography, { variant: "h6", children: ["Temperature: ", weatherData.main.temp, "\u00B0C"] }), _jsxs(Typography, { variant: "h6", children: ["Description: ", weatherData.weather[0].description] })] })))] }) }));
};
export default Weather;
