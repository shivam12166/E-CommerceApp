import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'

const Contact = () => {
    return (
        <Layout title={'Contact us'}>
            <div className='contactus'>
                <div className='row contactus'>
                    <div className='col-md-6'>
                        <img src="/images/contactus.jpg" alt="contact us"
                            style={{ width: "100%" }} />
                    </div>
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>CONTACT US</h1>
                    <p className='text-justify mt-2'>
                        any query and info about product feel free to call anytime we are available 24X7 hours.
                    </p>
                    <p className='mt-3'>
                        <BiMailSend /> : GopalKirana12321@gmail.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall /> : 9199376105
                    </p>
                    <p className='mt-3'>
                        <BiSupport /> : 9199376105
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact