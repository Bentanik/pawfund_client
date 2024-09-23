
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white px-32 py-16">
      <div className="flex justify-between">
        <div>
          <h2 className="text-lg font-bold">CAT ADOPTION FOUNDATION INC</h2>
          <p>Office address:</p>
          <p>PO Box 143 Dernancourt</p>
          <p>SA 5075</p>
          <p>(Please note we do not have a shelter location, we’re a foster care network only)</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">CONTACT US</h2>
          <p>Phone: 0404 032 650</p>
          <p>Email: info@cafinc.org.au</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">DIRECT DONATION</h2>
          <p>Account name: Cat Adoption Foundation</p>
          <p>BSB: 065 145  Account: 10459071</p>
          <p>PayPal: info@cafinc.org.au</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">CONNECT WITH US</h2>
          <div className="flex space-x-2">
            <a href="#">🟡</a>
            <a href="#">🔵</a>
            <a href="#">🔴</a>
            <a href="#">🟣</a>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-600 mt-10" />
      <div className="mt-4">
        © 2024 Cat Adoption Foundation Inc.
      </div>
    </footer>
  );
};

export default Footer;