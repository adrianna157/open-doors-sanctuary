import React from "react";
import { Link } from "react-router-dom";
import styles from "./TitleScreen.module.css";

export default function TitleScreen () {
    return (
        <>
            <section className={`bg-hacky-50 ${styles.section}`}>
                <div className="container relative h-full mx-auto">
                    <div className="flex items-end justify-around">
                        <img className="translate-y-1/4 rounded-3xl border-2 border-black" alt="" src="https://unsplash.it/400/600"/>
                        <div className="inline text-center mb-28">
                            <h3 className="text-4xl text-white mb-4">Help house Ukrainian refugees</h3>
                            <Link to="/about" className="bg-white text-hacky-50 text-2xl p-4 inline-block rounded-3xl">Learn more</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
        </>
    );
}