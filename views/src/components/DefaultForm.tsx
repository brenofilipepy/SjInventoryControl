import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DefaultFormProps {
    children: ReactNode;
    customHeader?: ReactNode;
    customFooter?: ReactNode;
}

const Defaultform = ({ children, customHeader, customFooter }: DefaultFormProps) => {
    return (
        <main className="d-flex w-100">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">
                            {customHeader}
                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-3">
                                        {children}
                                    </div>
                                </div>
                            </div>
                            {customFooter}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Defaultform;