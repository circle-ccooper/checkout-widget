import React, { useState, useEffect } from 'react'
import { Circle, CircleEnvironments } from "@circle-fin/circle-sdk";

const WalletBalance = () => {

    const circle = new Circle(
        'QVBJX0tFWTo2NTQ5MzU1YjZmM2E5MGM2Yjk0NzFjMTMwMjEyMTg2NDo2MWE0YjhiZTUwZDc3OTBkNjIyMGEzNGVjMTZlZjA0MQ==',
            CircleEnvironments.sandbox
    );

    async function listBalance() {
        const resp = await circle.balances.listBalances();
        return resp.data.data?.available[0].amount;
      }

      console.log(listBalance());

    return (
        <div>
            <h1>Your account balance: </h1>
        </div>
    )
}

export default WalletBalance
