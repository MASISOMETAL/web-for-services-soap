import React, { useState } from 'react';
import { styled } from 'styled-components';
import Header from './Header';

const currencyDefault = {
    country: "",
    currency: ""
}

const MainPage = () => {

    const [countryName, setCountryName] = useState("")
    const [currency, setCurrency] = useState(currencyDefault)

    const apiUrl = 'https://api-service-soap.onrender.com/api/getcurrency';

    const onHandleServices = async () => {
        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers,
                body: JSON.stringify({ country: countryName })
            })

            const xmlResponse = await response.json();

            console.log(xmlResponse)
            setCountryName("")
            setCurrency({
                country: xmlResponse.pais,
                currency: xmlResponse.moneda
            })

        } catch (error) {
            console.error('Error al llamar al servicio SOAP:', error);
            throw error;
        }

    }

    return (
        <Container>
            <Header title="Moneda" />
            <Box2>
                <h3>Escribir el pais con la primera letra mayuscula y en ingles</h3>
                <Box>
                    <input type="text" onChange={(e) => setCountryName(e.target.value)} value={countryName} />
                    <Button onClick={onHandleServices}>Enviar</Button>
                </Box>
                {currency.country && <p>Pais: {currency.country} Moneda: {currency.currency}</p>}
            </Box2>
        </Container >
    )
}

const Container = styled.main`

`;
const Box = styled.section`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 10px;
`;
const Box2 = styled.section`
    display: flex;
    margin-top: 1rem;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;
const Button = styled.button`
    padding: 10px;
`;

export default MainPage