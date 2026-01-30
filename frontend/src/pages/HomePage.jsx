import React from 'react'
import Navbar from '../components/Navbar'
import { ArrowRight, Upload, Cpu, BarChart3 } from "lucide-react";

const HomePage = () => {

    const stats = [
    { label: "Validation Accuracy", value: "93.21%" },
    { label: "Precision", value: "93.84%" },
    { label: "Recall", value: "99.17%", highlight: true },
    { label: "F1 Score", value: "96.43%" }
  ];
    
    return (
        <>
            <Navbar />

            <main className="bg-linear-to-b from-emerald-50 via-white to-white overflow-hidden">

                {/* HERO */}
                <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 text-center animate-fade-in">
                <h1 className="text-5xl font-bold tracking-tight mb-6">
                    Intelligent Road Infrastructure Analysis
                </h1>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
                    RoadSight leverages computer vision to analyze road conditions from
                    images, supporting smarter infrastructure monitoring and
                    data-driven maintenance decisions.
                </p>

                <a
                    href="/upload"
                    className="inline-flex items-center gap-2
                            bg-emerald-600 text-white
                            px-8 py-4 rounded-xl text-sm font-semibold
                            hover:bg-emerald-700
                            transition-all duration-300
                            shadow-md hover:shadow-lg
                            hover:-translate-y-0.5"
                >
                    Upload Road Image
                    <ArrowRight size={16} />
                </a>
                </section>

                {/* METRICS */}
                <section className="max-w-6xl mx-auto px-6 pb-28">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                    <div
                        key={stat.label}
                        className={`rounded-2xl p-6 text-center border
                        transition-all duration-300
                        hover:-translate-y-1 hover:shadow-lg
                        ${stat.highlight
                            ? "bg-emerald-50 border-emerald-200"
                            : "bg-white"}
                        `}
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <p
                        className={`text-3xl font-bold mb-2
                            ${stat.highlight ? "text-emerald-700" : ""}
                        `}
                        >
                        {stat.value}
                        </p>
                        <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                    ))}
                </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="max-w-6xl mx-auto px-6 pb-32">
                <h2 className="text-3xl font-semibold text-center mb-16">
                    How RoadSight Works
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                    {
                        icon: Upload,
                        title: "Upload Image",
                        desc: "Capture or upload a road surface image from any device."
                    },
                    {
                        icon: Cpu,
                        title: "AI Processing",
                        desc: "A CNN-based model analyzes visual features in real time."
                    },
                    {
                        icon: BarChart3,
                        title: "Actionable Output",
                        desc: "Receive classification results with confidence scores."
                    }
                    ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <div
                        key={item.title}
                        className="bg-white border rounded-2xl p-8
                                    shadow-sm hover:shadow-lg
                                    transition-all duration-300
                                    hover:-translate-y-1"
                        >
                        <div className="h-12 w-12 rounded-xl bg-emerald-100
                                        flex items-center justify-center mb-6">
                            <Icon className="text-emerald-700" size={22} />
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                        </div>
                    );
                    })}
                </div>
                </section>
            </main>
    </>
    )
}

export default HomePage