import React, { Fragment } from 'react';
import Form from './Form'
import Error from './Error'
import Loader from './Loader'
import Forecast from './Forecast'
import Header from '../Header';


const Page = () => {
    return (
        <Fragment>
            <Header />
            {/* Form */}
            <Form />
            {/* Error */}
            <Error />
            {/* Loader */}
            <Loader />
            {/* Forecast */}
            <Forecast />
        </Fragment>
    );
};

export default Page;
