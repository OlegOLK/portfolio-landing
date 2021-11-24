import React from "react";
import Disctord from "../components/lib/discord.button";
import useTranslation from 'next-translate/useTranslation'
import Footer from "../components/footer";
import Main from "../components/main";
import styles from '../styles/Main.module.css';
import terms from '../styles/Terms.module.css';
import cx from 'classnames';
import Grid from "../components/gird";
import { AccordionTerms } from "../components/lib/accordion.terms";

export default function Terms() {
    const { t } = useTranslation('home')
    return (
        <>
            <div className="fixed lg:bottom-2 2xl:bottom-12 right-24 z-50 hidden lg:block">
                <Disctord />
            </div>
            <main className={cx("w-full flex justify-center pt-24 h-auto", terms.main)}>
                <Grid additionalStyles="z-0 w-full">
                    <div className="col-span-9  col-start-2">
                        <p className={terms.heading}>Terms of Service</p>
                        <p className={cx('color-main mt-5', terms.subHeader)}>Effective Date: August 17, 2021</p>

                        <p className={cx('break-words mt-16 mb-20', terms.description)}>
                            This Terms of Service Agreement (the “Agreement”) is a legally binding contract that shall govern our relationship with our users and others who may interact or interface with IQube.app and our subsidiaries and affiliates, in association with the use of the IQube.app app and website which includes <a className="color-main">www.iqube.app</a>, (collectively “IQube.app”), and its Services, which shall be defined below.
                        </p>
                    </div>


                    <AccordionTerms header={"1. Assent & Acceptance"} subHeader={"By using IQube.app, you warrant that you have read and reviewed this Agreement and you agree to be bound by it. If your do not agree to be bound by this Agreement, please exit IQube.app and delete any applicable mobile application from your device immediately. We only agree to provide use of IQube.app and the Services to your if your assent to this Agreement."} />
                    <AccordionTerms header={"2. Definitions"} subHeaders={(
                        <>
                            <p className={cx('mb-4', terms.termText)}>{`A.	"EFFECTIVE DATE": "Effective Date" means the date this Agreement comes into force and effect.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`B.  "PARTIES": The parties to this Agreement are the owner and operator of IQube.app, Dream Research, Inc., and your, as the User or Member of IQube.app. Hereinafter, the parties will individually be referred to as "Party" and collectively as "Parties."`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`C.	“DREAM RESEARCH”: The publisher, owner, and operator of IQube.app is Dream Research, Inc. Dream Research, Inc. shall be described as Owner, Operator or the Company. If Dream Research's property shall be referred to through first-person pronouns, it shall be through the use of the following: us, we, our, ours, etc.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`D.  “YOU”: Should you agree to this Agreement and continue your use of IQube, you will be referred to as either you, the User, the Member (if you have registered for any Services on IQube), or if any second-person pronouns are required and applicable, such pronouns as 'your", "yours", etc.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`E.  SERVICES: "Services" means any Services that we make available for use or sale on IQube.`}</p>
                        </>
                    )} />
                    <AccordionTerms header={"3. IQube.app Services"} subHeaders={(
                        <>
                            <p className={cx('mb-4', terms.termText)}>{`IQube.app is a unified dashboard for tracking cryptocurrency assets. IQube.app also offers additional Services which may include, but are not limited to, projections of your potential investment gains based on reported transaction history, tax-related services, detailed transaction information, and an automated tool for assisting you with your cryptocurrency investments. `}</p>
                            <p className={cx('mb-4', terms.termText)}>{`Any and all visitors to IQube.app, despite whether they are registered or not, shall be deemed “Users” of the IQube.app Services, as described in this Agreement. Once an individual registers for the Services, through the process of creating an account, the User shall then be considered a “Member”. All Members are also Users.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`The User and/or Member acknowledges and agrees that the Services provided and made available on and through IQube.app are the sole property of the Company. We may offer the Services or other access on additional mobile applications, which may be made available on various social media networking sites and numerous other platforms and downloadable programs.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`At our sole and exclusive discretion, we may offer additional Services and/or products, or we may update, modify or revise any current content and Services. If we do so, this Agreement shall apply to any and all additional Services and/or products and any and all updated, modified or revised Services unless otherwise stipulated. We hereby reserve the right to cancel and cease offering any of the aforementioned Services and/or products at our discretion. You, as the end User and/or Member, acknowledge, accept and agree that we shall not be held liable for any such updates, modifications, revisions, suspensions or discontinuance of any of our Services and/or products. Your continued use of the Services provided, after such posting of any updates, changes, and/or modifications, shall constitute your acceptance of such updates, changes and/or modifications, and as such, frequent review of this Agreement and any and all applicable terms and policies should be made by you to ensure you are aware of all terms and policies currently in effect. Should you not agree to the updated, revised or modified terms, you must stop using the provided Services immediately.`}</p>
                        </>
                    )} />

                    <AccordionTerms header={"4. Age Restriction"} subHeader={`No minors under 18 years of age are permitted to use IQube.app. By using IQube.app as an individual, you represent and warrant that you are at least 18 years of age and may legally enter into a binding contract with the Company. We disclaim any liability for any misrepresentation of your or any other user’s age. You further represent and warrant that you are not prohibited from using IQube.app under the laws of the United States or any applicable jurisdiction. We assume no responsibility or liability for any misrepresentation of your age.`} />

                    <AccordionTerms header={"5. Registration & Privacy"} 
                    subHeaders={(
                        <>
                            <p className={cx('mb-4', terms.termText)}>{`When you register, the Company may collect information such as your email address and depending on the Services you choose, other information, such as billing info and verification data or cryptocurrency wallet information. Once you register with the Company and sign into our Services, you are no longer anonymous to Us.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`As a Member, you herein consent to the collection and use of the information provided, including the transfer of information within the United States and other countries for storage, processing or use by the Company and/or our subsidiaries and affiliates.`}</p>
                            <p className={cx('mb-4', terms.termText)}>{`You can obtain further details about our collection, use, storage, and disclosure of data on our Privacy Policy.`}</p>
                        </>
                    )} />

                </Grid>

            </main>

            <Footer />
        </>
    )
}