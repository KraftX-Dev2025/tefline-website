"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { transportationOptions, locationInfo } from "@/lib/constants/contact";

export default function LocationMapSection() {
    const mapRef = useRef<HTMLDivElement>(null);

    const isMapInView = useInView(mapRef, { once: true, amount: 0.3 });

    return (
        <div ref={mapRef} className="flex-grow">
            <div className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-xl border border-slate-200 overflow-hidden relative shadow-xl h-full">
                {/* Headings and badge moved outside aspect-ratio box for better mobile layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isMapInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                >
                    <div className="badge-teal">
                        <MapPin className="w-4 h-4 mr-2" />
                        Our Location
                    </div>
                    <h2 className="text-2xl font-bold text-teal-600">
                        Find Us
                    </h2>
                </motion.div>

                <div className="relative overflow-hidden rounded-lg sm:aspect-video aspect-[4/3]">
                    {/* Map Placeholder - In a real implementation, this would be replaced with a Google Maps integration */}
                    <Image
                        src={locationInfo.mapImage}
                        alt="Map location"
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 800px"
                        priority
                    />

                    {/* Map Overlay with Address */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-4">
                        <div className="flex items-start text-white max-w-lg">
                            <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-medium">
                                    {locationInfo.name}
                                </h3>
                                <p className="text-sm text-white/80">
                                    {locationInfo.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transportation Options */}
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {transportationOptions.map((option, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isMapInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.4,
                                delay: 0.2 + idx * 0.1,
                            }}
                            className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm flex items-center"
                        >
                            <span className="text-xl mr-3">{option.icon}</span>
                            <div>
                                <h4 className="font-medium text-teal-600 text-sm">
                                    {option.title}
                                </h4>
                                <p className="text-xs text-slate-500">
                                    {option.directions}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
