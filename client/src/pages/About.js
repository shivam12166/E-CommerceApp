import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={'About Goapal Kirana'}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h6>Welcome to Gopal Kirana Store - Your Wholesale Grocery Destination in Ratanpur, Darbhanga District, Bihar</h6>
                    <p className="text-justify mt-2">
                        Gopal Kirana Store is your one-stop destination for all your grocery needs at wholesale rates. Located in the heart of Ratanpur, a quaint village in the picturesque Darbhanga District of Bihar, our store has been serving the community with quality products and exceptional service for years.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;