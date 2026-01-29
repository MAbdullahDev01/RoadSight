import React from 'react'
import Navbar from '../components/Navbar'

const HomePage = () => {

    const stats = {
    validationAccuracy: 0.9321,
    precision: 0.9384,
    recall: 0.9917,
    f1Score: 0.9643
  };
    
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
                <section className="text-center max-w-3xl mb-12">
                    <h1 className="text-4xl font-bold mb-4"> Welcome to RoadSight </h1>
                    <p className="text-lg text-gray-700"> RoadSight is an AI-powered platform for real-time road condition detection.
                                                            Upload an image of a road and get instant analysis powered by our machine learning model. 
                    </p>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-xl mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-center"> Current ML Model Stats </h2>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                            <p className="font-bold text-xl">{stats.validationAccuracy}</p>
                            <p className="text-gray-500">Validation Accuracy</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">{stats.precision}</p>
                            <p className="text-gray-500">Precision</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">{stats.recall}</p>
                            <p className="text-gray-500">Recall</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">{stats.f1Score}</p>
                            <p className="text-gray-500">F1 Score</p>
                        </div>
                    </div>
                </section>
                <button
                    onClick={() => window.location.href = "/upload"}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                    Upload an Image
                </button>
            </main>
        </>
    )
}

export default HomePage