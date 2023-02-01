import React, { useState, useEffect } from 'react'
import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";

const WalletBalance = () => {
    const [balanceRes, setBalanceRes] = useState(0);
    const [createCryptoPaymentRes, setCreateCryptoPaymentRes] = useState(null);

    const circle = new Circle(
        'QVBJX0tFWTo2NTQ5MzU1YjZmM2E5MGM2Yjk0NzFjMTMwMjEyMTg2NDo2MWE0YjhiZTUwZDc3OTBkNjIyMGEzNGVjMTZlZjA0MQ==',
            CircleEnvironments.sandbox
    );

    useEffect(() => {
      async function fetchData() {
        const resp = await circle.balances.listBalances();
        setBalanceRes(resp.data.data?.available[0].amount);
      }
      fetchData();
    }, []);

    async function createCryptoPayment() {
        try {
            const createCryptoPaymentRes = await circle.paymentIntents.createPaymentIntent({
                idempotencyKey: "b65e629d-a607-4e28-9a38-6e5361973042",
                amount: {
                  amount: "39.14",
                  currency: "USD",
                },
                settlementCurrency: "USD",
                paymentMethods: [
                  {
                    chain: "ETH",
                    type: "blockchain",
                  },
                ],
            });
            setCreateCryptoPaymentRes(createCryptoPaymentRes);
        } catch (error) {
            console.error(error);
        }
    }
    
    

    return (
        <div>
            <h1>Your account balance: {balanceRes} </h1>
            {createCryptoPaymentRes && <p>Payment Id: {createCryptoPaymentRes.data.id}</p>}
            <button onClick={createCryptoPayment}>Create Payment</button>
        </div>
    )
    
}

export default WalletBalance

