import Head from "next/head";
import Image from "next/image";

import { useState, useEffect } from "react";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

const Page = () => {
    const [loaded, setLoaded] = useState(false);
    const [text, setText] = useState("");
    const [currentText, setCurrentText] = useState(0);
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 250);
    }, []);

    useEffect(() => {
        const texts = [
            "18-year-old student, living in the UK.",
            "Blockchain & Cryptocurrency Enthusiast.",
            "Computer-science & Mathematics Tutor.",
            "Offering personalized service ads for maximum marketing impact.",
        ];

        const delay = {
            " ": 100,
            ",": 125,
            ".": 125,
            "!": 125,
        };

        if (typing) {
            if (currentText < texts.length) {
                if (text.length < texts[currentText].length) {
                    setTimeout(() => {
                        setText(
                            texts[currentText].substring(0, text.length + 1)
                        );
                    }, delay[texts[currentText][text.length]] || 75);
                } else {
                    setTimeout(() => {
                        setTyping(false);
                    }, 3000);
                }
            } else {
                setCurrentText(0);
                setTyping(true);
            }
        } else {
            if (text.length > 0) {
                setTimeout(() => {
                    setText(texts[currentText].substring(0, text.length - 1));
                }, 30);
            } else {
                setTimeout(() => {
                    setTyping(true);
                    setCurrentText(currentText + 1);
                }, 100);
            }
        }
    }, [text, currentText, typing]);

    return (
        <>
            <style jsx>
                {`
                    h1 {
                        font-size: 40px;
                        font-weight: 700;
                    }

                    h2 {
                        font-size: 20px;
                        font-weight: 500;
                    }

                    h3 {
                        font-size: 20px;
                        font-weight: 300;
                        line-height: 1.3;
                        margin: 0 20px;
                    }

                    .app {
                        opacity: ${loaded ? "1" : "0"};
                        transition: opacity 2s ease-in-out;
                    }

                    .top {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .text {
                        max-width: 900px;
                        margin: 0 20px;
                        width: 100%;
                        height: 60px;
                        text-align: center;
                        overflow: hidden;
                    }

                    .socials {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: center;
                        margin-top: 5px;
                    }

                    .social {
                        display: flex;
                        flex-direction: row;
                        width: 300px;
                        background: #0f0f0f;
                        border: 1px solid #1f1f1f;
                        margin: 10px;
                        transition: border 0.2s ease-in-out;
                    }

                    .social:hover {
                        border: 1px solid #2f2f2f;
                    }

                    .social h2 {
                        font-weight: 600;
                    }

                    .social h2 span {
                        color: #ddd;
                    }

                    .social .pfp-container {
                        margin: 15px;
                    }

                    .social .text-container {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .social .badges {
                        font-size: 1.8rem;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    .link {
                        color: #b19cd9;
                        font-size: 1.8rem;
                        text-decoration: none;
                    }

                    .link:hover {
                        text-decoration: underline;
                    }

                    .email-text {
                        margin-top: 10px;
                        font-size: 1.6rem;
                        color: #ddd;
                    }

                    .email {
                        color: #b19cd9;
                        font-size: 1.6rem;
                        text-decoration: none;
                        background-color: #111111;
                        padding: 3px 5px;
                        border-radius: 4px;
                        font-family: monospace;
                    }
                `}
            </style>
            <Head>
                <title>tragic.sh - Tragic&apos;s Portal</title>
            </Head>
            <div id="app" className="app">
                <div className="top">
                    <h1
                        style={{
                            marginRight: "15px",
                        }}
                    >
                        tragic.sh
                    </h1>
                    <Tooltip
                        arrow
                        interactive
                        title="This checkmark means nothing."
                    >
                        <Image
                            src="/img/verified.png"
                            alt="tragic"
                            width="20"
                            height="20"
                        />
                    </Tooltip>
                </div>
                <div className="text">
                    <h3>{text}</h3>
                </div>

                <h2
                    style={{
                        margin: "0 50px",
                        textAlign: "center",
                    }}
                >
                    Here&apos;s the best places to contact me 👇
                </h2>
                <div className="socials">
                    <div className="social">
                        <div className="pfp-container">
                            <Image
                                style={{ borderRadius: "75px" }}
                                src="/img/pfp.png"
                                alt="tragic"
                                width="75"
                                height="75"
                            />
                        </div>
                        <div className="text-container">
                            <h2>
                                tragic<span>#1337</span>
                            </h2>
                            <div className="badges">
                                <Tooltip
                                    arrow
                                    interactive
                                    title="HypeSquad Bravery"
                                    position="bottom"
                                >
                                    <Image
                                        style={{ marginRight: "2px" }}
                                        src="/img/discord/badge/bravery.png"
                                        alt="tragic"
                                        width="16"
                                        height="16"
                                    />
                                </Tooltip>

                                <Tooltip
                                    arrow
                                    interactive
                                    title="Active Developer"
                                    position="bottom"
                                    size="small"
                                >
                                    <Image
                                        style={{ marginRight: "2px" }}
                                        src="/img/discord/badge/active.png"
                                        alt="tragic"
                                        width="24"
                                        height="24"
                                    />
                                </Tooltip>

                                <Tooltip
                                    arrow
                                    interactive
                                    title="Early Supporter"
                                    position="bottom"
                                    size="small"
                                >
                                    <Image
                                        style={{ marginRight: "2px" }}
                                        src="/img/discord/badge/early.png"
                                        alt="tragic"
                                        width="24"
                                        height="24"
                                    />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className="social">
                        <div className="pfp-container">
                            <Image
                                style={{ borderRadius: "75px" }}
                                src="/img/pfp.png"
                                alt="tragic"
                                width="75"
                                height="75"
                            />
                        </div>
                        <div className="text-container">
                            <h2>@ohtragic</h2>
                            <a
                                className="link"
                                href="https://t.me/ohtragic"
                                target="_blank"
                                rel="noreferrer"
                            >
                                t.me/ohtragic
                            </a>
                        </div>
                    </div>
                </div>
                <h3 className="email-text">
                    Or send me an email:{" "}
                    <span className="email">fred@tragic.sh</span>
                </h3>
            </div>
        </>
    );
};

export default Page;
