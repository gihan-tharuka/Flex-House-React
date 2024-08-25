import React from "react";

const Services = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-2">Web Development</h2>
                    <p className="text-gray-700">
                        We create modern and responsive websites using the latest technologies.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-2">Mobile App Development</h2>
                    <p className="text-gray-700">
                        We develop native and cross-platform mobile apps for iOS and Android.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
                    <p className="text-gray-700">
                        We design intuitive user interfaces and experiences for web and mobile apps.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Services;