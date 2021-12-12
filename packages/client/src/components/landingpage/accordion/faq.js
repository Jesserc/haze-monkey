import React from "react";
import Accordion from "./Accordion";

// import "../css/main.css";

// import "../scss/main.scss";


const questionsAnswers = [
    {
        question: "What’s an NFT?",
        answer:
            "An NFT stands for 'Non-fungible token' and is a fancy way of saying it’s a unique, one of a kind digital item that users can buy, own, and trade. Some NFTs main function are to be digital art and look cool, some offer additional utility like exclusive access to websites or participation in an event, think of it like a rare piece of art that can also act as a 'members' card.",
    },
    {
        question: "What is Metamask?",
        answer:
           "Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint a Cool Cat. Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored. Learn more about Metamask and how easy it is to use over here! (https://metamask.io/)",
    },
    {
        question: "Where does my NFT go after I purchase a Stoned Monkey?",
        answer:
            "You can TAGC will be available for purchase through an initial sale on our website. A randomly created The Awaken Gods Club NFT will be minted on the Solana blockchain and handed to your wallet after you make a purchase. up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
        question: "Will there be a presale?",
        answer:
            "November. Date TBA",
    },
    {
        question: "What can I do with my Stoned Monkey?",
        answer: "TBA",
    },
    {
        question: "Do I own the Stoned Monkey after minting it?",
        answer: "Yes, Opensea.io ",
    }
];

const Faqs = () => {
    return (
        <div className="col-lg-12 col-sm-12">
            <div className="col-lg-9">
                <Accordion questionsAnswers={questionsAnswers} />
            </div>
        </div>
    );
};

export default Faqs;