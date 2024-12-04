'use client';

import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart'; // Eğer DoughnutChart bileşeniniz varsa

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart bileşeni, accounts prop'u ile kullanılıyor */}
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="total-balance-label">Total current Balance</div> {/* p yerine div kullanıldı */}
        <div className="total-balance-amount flex-center gap-2"> {/* p yerine div kullanıldı */}
          <AnimatedCounter amount={totalCurrentBalance} />
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
